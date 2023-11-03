function(instance, context) {
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    const mathID = "math" + id;
    const markup = ` <div id="${id}"> <div id="${mathID}"></div></div> `;


    instance.canvas.append(markup),
    // instance.data.inputElement = document.getElementById(inputID)
    instance.data.outputElement = document.getElementById(mathID)







instance.data.convert = function convert(value) {
    //
    //  Get the TeX input
    //
    const input =  value.trim();
    //
    //  Disable the display and render buttons until MathJax is done
    //
    // var display = document.getElementById("display");
    // var button = document.getElementById("render");
    // button.disabled = display.disabled = true;
    //
    //  Clear the old output
    //
    const output = instance.data.outputElement;
    output.innerHTML = '';
    //
    //  Reset the tex labels (and automatic equation numbers, though there aren't any here).
    //  Get the conversion options (metrics and display settings)
    //  Convert the input to SVG output and use a promise to wait for it to be ready
    //    (in case an extension needs to be loaded dynamically).
    //
    MathJax.texReset();
    const options = MathJax.getMetricsFor(output);
    // options.display = true
    MathJax.tex2svgPromise(input, options).then(function (node) {
      //
      //  The promise returns the typeset node, which we add to the output
      //  Then update the document to include the adjusted CSS for the
      //    content of the new equation.
      //
      output.appendChild(node);
      MathJax.startup.document.clear();
      MathJax.startup.document.updateDocument();
    }).catch(function (err) {
      //
      //  If there was an error, put the message into the output instead
      //
      output.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
    }).then(function () {
      //
      //  Error or not, re-enable the display and render buttons
      //
    //   button.disabled = display.disabled = false;
    });
  }

function init() {
    if(window.MathJax) return

    window.MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']]
        },
        svg: {
            fontCache: 'global'
        }
        };
    
    (function () {
      const script = document.createElement('script');
      script.onload = ()=>{script.id="dfjnsuie4ehbligsdhbewluwugiasfsgw43tasdfcvxcf364w5y6bvqwv45ywyy"}
      script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
      script.async = true;
      document.head.appendChild(script);
    })();
}
init() 

    instance.data.update = function(instance, properties){
        if(!document.getElementById("dfjnsuie4ehbligsdhbewluwugiasfsgw43tasdfcvxcf364w5y6bvqwv45ywyy")) {
            setTimeout(()=>{instance.data.update(instance, properties)}, 50)
        } else {
            instance.data.update = function(instance, properties) {
                instance.data.convert(properties.value || "")
            }
            instance.data.update(instance, properties)
        }
    }

}
