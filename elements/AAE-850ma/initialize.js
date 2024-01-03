function(instance, context) {
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    const mathID = "math" + id;
    const markup = `<div id="${id}"><div id="${mathID}" style="white-space: normal;"></div></div>`;

    instance.canvas.append(markup);
    instance.data.outputElement = document.getElementById(mathID);

    instance.data.convert = function convert(value) {
        const input = value.trim();
        const output = instance.data.outputElement;
        output.innerHTML = '';

        MathJax.texReset();
        const options = MathJax.getMetricsFor(output);
        options.display = false; // Disable display mode to allow line breaks

        MathJax.tex2svgPromise(input, options).then(function (node) {
            output.appendChild(node);

            // Adjust font size if necessary
            // const scaleFactor = Math.min(
            //     output.clientWidth / output.scrollWidth,
            //     output.clientHeight / output.scrollHeight
            // );

            // if (scaleFactor < 1) {
            //     output.style.fontSize = (parseFloat(window.getComputedStyle(output).fontSize) * scaleFactor) + 'px';
            // }

            MathJax.startup.document.clear();
            MathJax.startup.document.updateDocument();
        }).catch(function (err) {
            output.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
        });
    };

    function init() {
        if (window.MathJax) return;

        window.MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                extensions: ['AMS']
            },
            svg: {
                fontCache: 'global'
            }
        };

        (function () {
            const script = document.createElement('script');
            script.onload = () => { script.id = "dfjnsuie4ehbligsdhbewluwugiasfsgw43tasdfcvxcf364w5y6bvqwv45ywyy" };
            script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
            script.async = true;
            document.head.appendChild(script);
        })();
    }

    init();

    instance.data.update = function (instance, properties) {
        if (!document.getElementById("dfjnsuie4ehbligsdhbewluwugiasfsgw43tasdfcvxcf364w5y6bvqwv45ywyy")) {
            setTimeout(() => { instance.data.update(instance, properties) }, 50);
        } else {
            instance.data.update = function (instance, properties) {
                instance.data.convert(properties.value || "");
            };
            instance.data.update(instance, properties);
        }
    };
}
