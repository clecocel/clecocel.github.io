var els = document.getElementsByClassName('skill-chart'); // get canvas

for(i = 0;i < els.length; ++i) {
        var el = els[i]

        var div_width_original = el.offsetWidth;
        var div_width = el.offsetWidth * 2/3;
        //var margin_top = 1/4 * div_width;




		el.style.height = div_width.toString().concat("px");


		var options = {
		percent:  el.getAttribute('data-percent') || 25,
		size: el.getAttribute('data-size') || div_width,
		lineWidth: el.getAttribute('data-line') || div_width/18,
		rotate: el.getAttribute('data-rotate') || 0,
		caption: el.getAttribute('caption-text') || ''
		}



		


		var canvas = document.createElement('canvas');

		//canvas.style.top = margin_top.toString().concat("px");

		var span = document.createElement('span');

		span.style.lineHeight = div_width.toString().concat("px");

		var div_width_ratio = div_width / 5;

		span.style.fontSize = div_width_ratio.toString().concat("px");
		span.innerText = options.percent + '%';

		if (typeof(G_vmlCanvasManager) !== 'undefined') {
		    G_vmlCanvasManager.initElement(canvas);
		}

		var ctx = canvas.getContext('2d');
		canvas.width = canvas.height = options.size;

		el.appendChild(span);
		el.appendChild(canvas);

		ctx.translate(options.size / 2, options.size / 2); // change center
		ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

		//imd = ctx.getImageData(0, 0, 240, 240);
		var radius = (options.size - options.lineWidth) / 2;

		var drawCircle = function(color, lineWidth, percent) {
		    percent = Math.min(Math.max(0, percent || 1), 1);
		    ctx.beginPath();
		    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
		    ctx.strokeStyle = color;
		    ctx.lineCap = 'round'; // butt, round or square
		    ctx.lineWidth = lineWidth
		    ctx.stroke();
		};

		drawCircle('#efefef', options.lineWidth, 100 / 100);
		drawCircle('#18b3bc', options.lineWidth, options.percent / 100);

}