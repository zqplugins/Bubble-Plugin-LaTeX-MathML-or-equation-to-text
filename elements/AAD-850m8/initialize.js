function(instance, context) {
	let mapped=`
				<div id="MathDiv">
			<span id="math"></span><br>
			<textarea id="input" cols="50" rows="20">This is a test: $$Re{z} =\frac{npi dfrac{	heta +psi}{2}}{
				left(dfrac{	heta +psi}{2}\right)^2 + left( dfrac{1}{2}
				log leftlvertdfrac{B}{A}\right\rvert\right)^2}$$</textarea>
					</div>
			  `;instance.canvas.append(mapped),function(t,a){(a=t.createElement("script")).type="text/javascript",a.async=!0,a.onload=function(){},a.src="https://cdn.mathjax.org/mathjax/latest/MathJax.js",t.getElementsByTagName("head")[0].appendChild(a)}(document);
	}