window.addEventListener('DOMContentLoaded', (event) => {
	// Change logo to white Sunday logo
	let sundayLogo = document.querySelectorAll(".logo-img");
	for (let i = 0; i < sundayLogo.length; i++) {
		sundayLogo[i].src="https://teamsunday.com/wp-content/uploads/2022/03/Sunday_Full_White.png";
	}

	// Center Sunday logo on a black background
	let headerTF = document.querySelectorAll(".header-table > tbody > tr:first-child > td:nth-child(3)");
	for (let i = 0; i < headerTF.length; i++) {
		headerTF[i].setAttribute("colspan", "8");
		headerTF[i].classList.add("center");
	}

	// Hide matching style column
	let matchingStyleCol = document.querySelectorAll(".header-table > tbody > tr:nth-child(2) > td:nth-child(3)");
	for (let i = 0; i < matchingStyleCol.length; i++) {
		matchingStyleCol[i].classList.add("hidden");
	}

	// Change "hoodie" to "color" in table head
	let replaceHoodie = document.querySelectorAll(".table-standard.bom-page-table.bom_table > thead > tr > th:nth-child(6)");
	for (let i = 0; i < replaceHoodie.length; i++) {
		replaceHoodie[i].innerHTML = "Color";
	}

	// Change "Material Name" to "Fabric/decoration"
	let replaceMaterialName = document.querySelectorAll(".table-standard.bom-page-table.bom_table > thead > tr > th:nth-child(3)");
	for (let i = 0; i < replaceMaterialName.length; i++) {
		replaceMaterialName[i].innerHTML = "Fabric/decoration";
	}

	// Hide "Position"
	let removePosition = document.querySelectorAll(".stamp-info-box > table > tbody > tr:nth-child(2)");
	for (let i = 0; i < removePosition.length; i++) {
		removePosition[i].classList.add("hidden");
	}

	// Place "Width" & "Height" in a column
	let widthHeightCol = document.querySelectorAll(".stamp-info-box > table > tbody > tr:nth-child(1)");
	for (let i = 0; i < widthHeightCol.length; i++) {
		widthHeightCol[i].classList.add("flex-col");
	}

	// Hide "Layers" and "product"
	let removeLayersProducts = document.querySelectorAll(".table-standard > tbody > tr > th");
	for (let i = 0; i < removeLayersProducts.length; i++) {
		removeLayersProducts[i].classList.add("hidden");
	}

	// Hidden because it removes too many rows on each table.
	// Hide "Effect Artwork Execution"
	// let removeEffectArtwork = document.querySelectorAll(".table-standard > tbody > tr:nth-child(4) > td");
	// for (let i = 0; i < removeEffectArtwork.length; i++) {
	//     removeEffectArtwork[i].classList.add("hidden");
	// }

	// Select top mock up
	let firstIMG = document.querySelector(".image-container > img");
	let firstIMGSrc = firstIMG.src;

	$('.table-standard.bom-page-table').each(function() {
		var dynamicDivIMGHolder = `<div class="floating-img"><img src="${firstIMGSrc}"></div>`;
		$(this).append(dynamicDivIMGHolder);
	});

	// Add replace-style-id to style ID replacement
	/*
	let replaceStyleID = document.querySelectorAll(".header-table > tbody > tr:nth-child(2) > td:nth-child(1)");
	for (let i = 0; i < replaceStyleID.length; i++) {
        replaceStyleID[i].classList.add("replace-style-id");
    }

    */

	// Change "Style ID" to "Product Category"
	$('.replace-style-id').each(function(){
		$(this).text($(this).text().replace(/Style ID/g, "Product Category"));
	});

	// Change "Diffuse Color" to "Color"
	$('.editor-options.stamp-row-editor-options').next("span").each(function(){
		$(this).text($(this).text().replace(/Diffuse color/g, "Color"));
	});

	// Place color boxes in a column if there's more than 1 color
	$('.color-cell').each(function(){
		var $this = $(this);
		if ($this.find('.color-box').length > 1) {
			$this.addClass("flex-col");
		}});

	$('.table-standard > tbody > tr:nth-child(2) > td:nth-child(1)').each(function() {
		$(this).addClass("artwork-holder");
		$(this).next().addClass("artwork-logo");
	});

	$('.artwork-holder').each(function() {
		var artworkText = `<p style="font-weight: 700; margin-top: 10px;" class="artwork-text">Artwork</p>`;
		$(this).html(artworkText);
	});

	// Hide parent of "new setion"
	$('tr > .new-section.hidden').closest('tr').css("display", "none");

	$('header').next().css("height", "160mm");

	// Make position x & y bold
	$('.inner-table > tbody > tr:nth-child(1) > td:nth-child(1) > div:nth-child(2)').each(function(){
		$(this).addClass("hidden");
	});
	$('.inner-table > tbody > tr:nth-child(1) > td:nth-child(2) > div:nth-child(2)').each(function(){
		$(this).addClass("hidden");
	});

	$('.border-spacing-table > thead').each(function() {
		$(this).addClass("hidden");
	});

	// Delete "amount of sizes + 1" to remove all the "first images"
	let sizesTable = document.querySelectorAll(".border-spacing-table > tbody > .stamp-layout-container");

	let amountOfSizes = sizesTable.length;

	// Delete first logo pattern image
	if (amountOfSizes > 0) {
		$('.stamp-layout-container  > .stamp-layout-wrapper').remove();
	} else {

	};

	// Delete left stamp left bar on multiple sizes
	if (amountOfSizes > 0) {
		$('.stamp-page-top-container > .stamp-page-container > .stamp-left-bar').each(function() {
			this.remove();
		});

		$('.stamp-page-top-container > .stamp-page-container > .stamp-right-bar').each(function() {
			$(this).css("float", "none");
			$(this).css("text-align", "center");
			$(this).css("width", "fit-content");
			$(this).css("margin", "20px auto");
			$(this).css("padding", "20px");
			$(this).css("border", "1px solid black");
			$(this).css("border-radius", "9px");
			$(this).css("font-weight", "700");
		});
	} else {
		$('.stamp-page-top-container > .stamp-page-container > .stamp-left-bar').each(function() {
			$(this).css("text-align", "center");
			$(this).css("width", "300px");
			$(this).css("margin", "20px auto");
			$(this).css("padding", "20px");
			$(this).css("border-radius", "9px");
			$(this).css("font-weight", "700");
		});

		$('.stamp-page-top-container > .stamp-page-container > .stamp-right-bar').each(function() {
			$(this).css("text-align", "center");
			$(this).css("width", "300px");
			$(this).css("margin", "20px auto");
			$(this).css("padding", "20px");
			$(this).css("border-radius", "9px");
			$(this).css("font-weight", "700");
		});

		$('.stamp-page-top-container > .stamp-page-container > .stamp-left-bar > .stamp-info-box > table').each(function() {
			$(this).css("width", "100%");
		});
	};

	// Explicitly remove all editor options from this template
	$('.editor-options').remove();

	// An array of objects, where the key is the name of the element and the value is the exact matchint innerText (when trimmed)
	const hideRowsWith = [
		{
			'span': 'Eyelets',
		},
		{
			'span': 'Necklabel',
		},
		{
			'span': 'Effect (Artwork Execution)',
		},
	];

	((hideRowsWith) => {
		if (!Array.isArray(hideRowsWith)) {
			return;
		}

		for (let i = 0; i < hideRowsWith.length; i++) {
			for (const [nodeToSearch, requiredText] of Object.entries(hideRowsWith[i])) {
				// Create an xpath query to search for all nodes containing given text.
				const xpathEyelets = `//${nodeToSearch}[contains(text(),'${requiredText}')]`;

				// Grab all nodes by evaluating the xpath query.
				const matchingElements = document.evaluate(xpathEyelets, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
				let results = [];

				// Loop over all found nodes.
				while (element = matchingElements.iterateNext()) {
					const el = $(element);
					const closestRow = el.closest('tr');
					if (el.closest('td').text().trim() === requiredText) {
						results.push(el);
					} else {
						console.warn('Unable to remove the row, because it contains other text.', closestRow);
					}
				}

				for (let j = 0; j < results.length; j++) {
					results[j].closest('tr').addClass('to-be-removed').remove();
				}
			}
		}
	})(hideRowsWith);

	// First hide all the unnecessary pages. (Needed to make an accurate count of the headers.)
	$('header + .stamp-page-top-container').each((index, element) => {
		$(element).prev().addClass('hidden');
	});

	// Commented this section as the system will automatically add a new page at this moment
	// split color table over multiple pages (max 8 rows per page)
	let colorTableFirst = document.querySelectorAll(".table-standard.bom-page-table.bom_table");
	let colorTableRows = document.querySelectorAll(".table-standard.bom-page-table.bom_table > tbody > tr");

	let mainColorArray = Array.from(colorTableRows);

	if (mainColorArray.length < 8) {
		// Less than 8 => keep
	} else {
		let counterTables = 1;
		const splitAt = 8;
		let startAt = 0;
		let endAt = splitAt;
		let endAtMax = Math.min(16, mainColorArray.length);

		const firstColorArray = mainColorArray.slice(startAt, endAt);

		// Remove color rows from table and add array 1 to the table
		const firstTable = document.querySelectorAll(".table-standard.bom-page-table.bom_table > tbody");
		$(firstTable).html(firstColorArray);

		let hasRowsLeft = true;

		while (hasRowsLeft) {
			startAt = (counterTables - 1) * splitAt;
			endAt = counterTables * splitAt;
			endAtMax = Math.min((counterTables + 1) * splitAt, mainColorArray.length);

			// Split array in half
			const secondColorArray = mainColorArray.slice(endAt, endAtMax);
			//
			// // Create a new page
			// const header = document.querySelector("header");
			// // let headerClone = $(header).clone();
			// const bodyClone = $(colorTableFirst).clone().addClass("second-table");
			//
			// const headerClone = insertHeader();
			// // $(colorTableFirst).after(headerClone);
			// $(headerClone).after(bodyClone);
			//
			// Remove color rows from table and add array 1 to the table
			const lastTable = $('.table-standard.bom-page-table.bom_table').last().find('tbody');
			$(lastTable).html(secondColorArray);
			counterTables++;

			hasRowsLeft = endAt >= mainColorArray.length;
		}
	};

	$('.table-standard.bom-page-table.bom_table td:visible:first').each(element => {
		$(element).addClass('first-visible-cell');
	});

	function insertPage(parentContainer, $original, style) {
		const stampPageContainer = $(`<div class="stamp-container" style="${style}">
				<div class="stamp-logo" style="align-items: center;display:flex;height:30mm;justify-content: center;overflow:hidden;text-align: center;"></div>
				<div class="stamp-right-bar" style="text-align: center;"></div>
				<div class="stamp-left-bar" style="text-align: center;"></div>
				<div class="stamp-colors-container" style="text-align: center;">
					<span class="stamp-colors-title">Color(s)</span>
					<div class="stamp-colors"></div>
				</div>
			</div>`);
		const stampPageInfo = $original.find('.stamp-left-bar').html();
		const stampMaterialInfo = $original.find('.stamp-right-bar').clone();
		stampMaterialInfo.find('.link-container').addClass('hidden');
		stampMaterialInfo.find('.caption-bar').text('Decoration: ');

		const stampTable = $original.find('.table-standard');
		const artworkLogo = stampTable.find('.artwork-logo .stamp-small').clone();
		artworkLogo.style = 'height:100% !important;';

		const stampColors = stampTable.find('.color-box-wrapper').clone();
		stampColors.addClass('color-cell flex-col').css('justify-content', 'center!important');

		stampPageContainer.find('.stamp-left-bar').append(stampPageInfo);
		stampPageContainer.find('.stamp-right-bar').append(stampMaterialInfo.html());
		stampPageContainer.find('.stamp-logo').append(artworkLogo);
		stampPageContainer.find('.stamp-colors').append(stampColors);

		$(parentContainer).append(stampPageContainer);

		$original.addClass('hidden');
	}

	function insertHeader() {
		let headerClone = $(document.querySelector("header")).clone();
		const pageNumber = $('header:not(.hidden)').length + 1;
		headerClone.find('tr:last-child td:last-child').text(`Page: ${pageNumber}`);

		$('#reportData').append(headerClone);

		return headerClone;
	}

	function insertPageContainer() {
		const parentContainer = $('<div class="stamp-page-top-container" style="font-size:0;height:160mm;padding:10px;">');
		$('#reportData').append(parentContainer);

		return parentContainer;
	}

	function setStyle() {
		const totalStamps = $('.stamp-page-top-container').length;
		let style = 'display:inline-block;overflow:hidden;padding:0 20px 20px 20px;';
		let insertHeaderAfterCount = 4;

		if (totalStamps === 1) {
			style += 'height:100%;width:100%;';
			insertHeaderAfterCount = 1;
		} else if (totalStamps === 2) {
			style += 'height:100%;width:50%;';
			insertHeaderAfterCount = 2;
		} else {
			style += 'height:80mm;width:50%;';
		}

		return [
			insertHeaderAfterCount,
			style,
			totalStamps,
		]
	}

	function includeStyle() {
		let style = `
		<style>
			.color-cell {
				flex-wrap:wrap;
				line-height:2;
				white-space: pre-wrap;
			}
			.color-box-container {
				margin-right:5px;
			}
			.color-box-container:last-child {
				margin:0;
			}
			.color-box-container hr {
				display: none;
			}
			.color-box {
				float:left;
				margin-bottom:5px;
				position:relative;
			}
			.inner-color-box {
				left:0;
				position:absolute;
				top:0;
			}
			.stamp-info-box {
			 	padding-bottom:10px;
			}
			.stamp-colors {
				display: flex;
				flex-wrap:wrap;
				justify-content: center;
			}
			.stamp-colors-title {
				display:block;
				font-weight: 700;
				margin-bottom:10px;
			}
			.stamp-colors .color-cell {
				width:auto!important;
			}
			.stamp-colors .color-box {
				margin-bottom:0;
			}
			.stam-size-header {
				font-weight: 700;
				text-decoration: none;
			}
			.stamp-info-box > p {
				margin:0;
			}
			.stamp-info-box > p > :first-child {
				font-weight: 700;
			}
			.stamp-small {
				height:90px !important;
				max-width: 100%;
			}
		 	.table-standard.bom-page-table.bom_table td.color-cell {
		 		/*display:table-cell !important;*/
		 	}
			.table-standard td,
		 	.table-standard.bom-page-table.bom_table td:nth-child(odd) {
				border-right:0 none!important;
			}
		 	.table-standard.bom-page-table.bom_table .last-visible-cell {
				border-left: 1px solid black!important;
			}
			.table-standard.bom-page-table.bom_table tbody {
				width: 60%
			}
		</style>`;

		$('head').get(0).insertAdjacentHTML('beforeend', style);
	}

	$('.table-standard.bom-page-table.bom_table td:visible').each((index, e) => {
		const parent = $(e).parent();

		if (parent.find('td:visible').last().get(0) === e) {
			$(e).addClass('last-visible-cell');
		}
	});

	// flex display color-cell flex-col -->  justify-content: center!important;
	// align-items: flex-start!important;
	// flex-direction: row-reverse!important;
	// justify-content: center!important;


	(() => {
		// Used to pass a container through the loop.
		let pageContainer = null;

		// TODO - grab all stamp pages - swith according to amount
		// 1 = full page
		// 2 = left half - right half
		// > 2 = all in quarters (also next pages)
		$('.stamp-page-top-container').each((index, element) => {
			[insertHeaderAfterCount, style, totalStamps] = setStyle();

			if (index % insertHeaderAfterCount === 0) {
				insertHeader();
				pageContainer = insertPageContainer();
			}

			switch (index % insertHeaderAfterCount) {
				case 0:
					if (totalStamps > 1) {
						style += 'border-right: 1px solid #000;';
					}

					if (totalStamps > 2) {
						style += 'border-bottom: 1px solid #000;';
					}

					break;
				case 1:
					if (totalStamps > 2) {
						style += 'border-bottom: 1px solid #000;';
					}
					break;
				case 2:
					style += 'border-right: 1px solid #000;';
					break;
				default:
					break;
			}

			insertPage(pageContainer, $(element), style);
		});

		$('.color-cell').each((index, element) => {
			const trimmedOldHtml = $(element).html().trim().replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, '');
			let newHtml = '<div class="contains-color-boxes"><div class="color-box-container">';
			newHtml += trimmedOldHtml.replaceAll('</div></div>', '</div></div></div></div><div class="color-box-container">');
			newHtml += '</div></div>';
			$(newHtml).find('.color-box-container:last-child').remove();
			$(element).html(newHtml);
		});

		includeStyle();
	})();

});


// END EDITS BY AARON


/*
colpick Color Picker
Copyright 2013 Jose Vargas. Licensed under GPL license. Based on Stefan Petre's Color Picker www.eyecon.ro, dual licensed under the MIT and GPL licenses

For usage and examples: colpick.com/plugin
 */

(function ($) {
	var colpick = function () {
		var
			tpl = '<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div><div class="acoColorPicker"></div></div>',
			defaults = {
				showEvent: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				colorScheme: 'light',
				color: '3289c7',
				livePreview: true,
				flat: false,
				layout: 'full',
				submit: 1,
				submitText: 'OK',
				height: 156
			},
			//Fill the inputs of the plugin
			fillRGBFields = function  (hsb, cal) {
				var rgb = hsbToRgb(hsb);
				$(cal).data('colpick').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colpick').fields
					.eq(4).val(Math.round(hsb.h)).end()
					.eq(5).val(Math.round(hsb.s)).end()
					.eq(6).val(Math.round(hsb.b)).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colpick').fields.eq(0).val(hsbToHex(hsb));
			},
			//Set the round selector position
			setSelector = function (hsb, cal) {
				$(cal).data('colpick').selector.css('backgroundColor', '#' + hsbToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colpick').selectorIndic.css({
					left: parseInt($(cal).data('colpick').height * hsb.s/100, 10),
					top: parseInt($(cal).data('colpick').height * (100-hsb.b)/100, 10)
				});
			},
			//Set the hue selector position
			setHue = function (hsb, cal) {
				$(cal).data('colpick').hue.css('top', parseInt($(cal).data('colpick').height - $(cal).data('colpick').height * hsb.h/360, 10));
			},
			//Set current and new colors
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colpick').currentColor.css('backgroundColor', '#' + hsbToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colpick').newColor.css('backgroundColor', '#' + hsbToHex(hsb));
			},
			//Called when the new color is changed
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colpick').color = col = hexToHsb(fixHex(this.value));
					fillRGBFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colpick').color = col = fixHSB({
						h: parseInt(cal.data('colpick').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colpick').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colpick').fields.eq(6).val(), 10)
					});
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
				} else {
					cal.data('colpick').color = col = rgbToHsb(fixRGB({
						r: parseInt(cal.data('colpick').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colpick').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colpick').fields.eq(3).val(), 10)
					}));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colpick').onChange.apply(cal.parent(), [col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el, 0]);
			},
			//Change style on blur and on focus of inputs
			blur = function (ev) {
				$(this).parent().removeClass('colpick_focus');
			},
			focus = function () {
				$(this).parent().parent().data('colpick').fields.parent().removeClass('colpick_focus');
				$(this).parent().addClass('colpick_focus');
			},
			//Increment/decrement arrows functions
			downIncrement = function (ev) {
				ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colpick_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colpick').livePreview
				};
				$(document).mouseup(current, upIncrement);
				$(document).mousemove(current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val - ev.pageY + ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colpick_slider').find('input').focus();
				$(document).off('mouseup', upIncrement);
				$(document).off('mousemove', moveIncrement);
				return false;
			},
			//Hue slider functions
			downHue = function (ev) {
				ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				$(document).on('mouseup touchend',current,upHue);
				$(document).on('mousemove touchmove',current,moveHue);

				var pageY = ((ev.type == 'touchstart') ? ev.originalEvent.changedTouches[0].pageY : ev.pageY );
				change.apply(
					current.cal.data('colpick')
						.fields.eq(4).val(parseInt(360*(current.cal.data('colpick').height - (pageY - current.y))/current.cal.data('colpick').height, 10))
						.get(0),
					[current.cal.data('colpick').livePreview]
				);
				return false;
			},
			moveHue = function (ev) {
				var pageY = ((ev.type == 'touchmove') ? ev.originalEvent.changedTouches[0].pageY : ev.pageY );
				change.apply(
					ev.data.cal.data('colpick')
						.fields.eq(4).val(parseInt(360*(ev.data.cal.data('colpick').height - Math.max(0,Math.min(ev.data.cal.data('colpick').height,(pageY - ev.data.y))))/ev.data.cal.data('colpick').height, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				$(document).off('mouseup touchend',upHue);
				$(document).off('mousemove touchmove',moveHue);
				return false;
			},
			//Color selector functions
			downSelector = function (ev) {
				ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colpick').livePreview;

				$(document).on('mouseup touchend',current,upSelector);
				$(document).on('mousemove touchmove',current,moveSelector);

				var payeX,pageY;
				if(ev.type == 'touchstart') {
					pageX = ev.originalEvent.changedTouches[0].pageX,
						pageY = ev.originalEvent.changedTouches[0].pageY;
				} else {
					pageX = ev.pageX;
					pageY = ev.pageY;
				}

				change.apply(
					current.cal.data('colpick').fields
						.eq(6).val(parseInt(100*(current.cal.data('colpick').height - (pageY - current.pos.top))/current.cal.data('colpick').height, 10)).end()
						.eq(5).val(parseInt(100*(pageX - current.pos.left)/current.cal.data('colpick').height, 10))
						.get(0),
					[current.preview]
				);
				return false;
			},
			moveSelector = function (ev) {
				var payeX,pageY;
				if(ev.type == 'touchmove') {
					pageX = ev.originalEvent.changedTouches[0].pageX,
						pageY = ev.originalEvent.changedTouches[0].pageY;
				} else {
					pageX = ev.pageX;
					pageY = ev.pageY;
				}

				change.apply(
					ev.data.cal.data('colpick').fields
						.eq(6).val(parseInt(100*(ev.data.cal.data('colpick').height - Math.max(0,Math.min(ev.data.cal.data('colpick').height,(pageY - ev.data.pos.top))))/ev.data.cal.data('colpick').height, 10)).end()
						.eq(5).val(parseInt(100*(Math.max(0,Math.min(ev.data.cal.data('colpick').height,(pageX - ev.data.pos.left))))/ev.data.cal.data('colpick').height, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				$(document).off('mouseup touchend',upSelector);
				$(document).off('mousemove touchmove',moveSelector);
				return false;
			},
			//Submit button
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colpick').color;
				cal.data('colpick').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colpick').onSubmit(col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el);
			},
			clickAcoColor = function (ev) {
				var aco = $(this);

				var col = aco.data('color');
				var hsb = hexToHsb(col);

				var cal = $(this).parent().parent();

				cal.data('colpick').origColor = col;
				cal.data('colpick').color = col;
				fillRGBFields(hsb, cal.get(0));
				fillHexFields(hsb, cal.get(0));
				fillHSBFields(hsb, cal.get(0));
				setSelector(hsb, cal.get(0));
				setHue(hsb, cal.get(0));
				setNewColor(hsb, cal.get(0));


				setCurrentColor(hsb, cal.get(0));
				cal.data('colpick').onSubmit(hsb, col, col, cal.data('colpick').el);

			},

			//Show/hide the color picker
			show = function (ev) {
				// Prevent the trigger of any direct parent
				ev.stopPropagation();
				var cal = $('#' + $(this).data('colpickId'));
				cal.data('colpick').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				var viewPort = getViewport();
				var calW = cal.width();
				if (left + calW > viewPort.l + viewPort.w) {
					left -= calW;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colpick').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				//Hide when user clicks outside
				$('html').mousedown({cal:cal}, hide);
				cal.mousedown(function(ev){ev.stopPropagation();})
			},
			hide = function (ev) {
				if (ev.data.cal.data('colpick').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
					ev.data.cal.hide();
				}
				$('html').off('mousedown', hide);
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth)
				};
			},
			//Fix the values if the user enters a negative or high value
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			},
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colpick').origColor;
				cal.data('colpick').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				//Set color

				if (typeof opt.color == 'string') {
					opt.color = hexToHsb(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = rgbToHsb(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}

				//For each selected DOM element
				return this.each(function () {
					//If the element does not have an ID
					if (!$(this).data('colpickId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						//Generate and assign a random ID
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colpickId', id);
						//Set the tpl's ID and get the HTML
						var cal = $(tpl).attr('id', id);
						//Add class according to layout
						cal.addClass('colpick_'+options.layout+(options.submit?'':' colpick_'+options.layout+'_ns'));
						//Add class if the color scheme is not default
						if(options.colorScheme != 'light') {
							cal.addClass('colpick_'+options.colorScheme);
						}
						//Setup submit button
						cal.find('div.colpick_submit').html(options.submitText).click(clickSubmit);
						//Setup input fields
						options.fields = cal.find('input').change(change).blur(blur).focus(focus);
						cal.find('div.colpick_field_arrs').mousedown(downIncrement).end().find('div.colpick_current_color').click(restoreOriginal);
						//Setup hue selector
						options.selector = cal.find('div.colpick_color').on('mousedown touchstart',downSelector);
						options.selectorIndic = options.selector.find('div.colpick_selector_outer');
						//Store parts of the plugin
						options.el = this;
						options.hue = cal.find('div.colpick_hue_arrs');
						huebar = options.hue.parent();
						//Paint the hue bar
						var UA = navigator.userAgent.toLowerCase();
						var isIE = navigator.appName === 'Microsoft Internet Explorer';
						var IEver = isIE ? parseFloat( UA.match( /msie ([0-9]{1,}[\.0-9]{0,})/ )[1] ) : 0;
						var ngIE = ( isIE && IEver < 10 );
						var stops = ['#ff0000','#ff0080','#ff00ff','#8000ff','#0000ff','#0080ff','#00ffff','#00ff80','#00ff00','#80ff00','#ffff00','#ff8000','#ff0000'];
						if(ngIE) {
							var i, div;
							for(i=0; i<=11; i++) {
								div = $('<div></div>').attr('style','height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+stops[i]+', endColorstr='+stops[i+1]+'); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+stops[i]+', endColorstr='+stops[i+1]+')";');
								huebar.append(div);
							}
						} else {
							stopList = stops.join(',');
							huebar.attr('style','background:-webkit-linear-gradient(top,'+stopList+'); background: -o-linear-gradient(top,'+stopList+'); background: -ms-linear-gradient(top,'+stopList+'); background:-moz-linear-gradient(top,'+stopList+'); -webkit-linear-gradient(top,'+stopList+'); background:linear-gradient(to bottom,'+stopList+'); ');
						}
						cal.find('div.colpick_hue').on('mousedown touchstart',downHue);
						options.newColor = cal.find('div.colpick_new_color');
						options.currentColor = cal.find('div.colpick_current_color');
						//Store options and fill with default color
						cal.data('colpick', options);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						//Append to body if flat=false, else show in place
						if (options.flat) {
							cal.appendTo(this).show();
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							cal.appendTo(document.body);
							$(this).on(options.showEvent, show);
							cal.css({
								position:'absolute'
							});
						}

						//aco colors
						if (opt.acoColors)
						{
							cal.addClass('colpick_hasAcoColors');
							var acoColorPicker = cal.find('div.acoColorPicker');
							for (var i = 0; i < opt.acoColors.length; i++)
							{
								var acoColor = opt.acoColors[i];
								var acoColorDiv = $('<div class="acoColorRow"></div>').html(acoColor.name).attr('style','background-color:#' 	+ intToHex(acoColor.int)).attr('title',acoColor.name);

								//attach event
								acoColorDiv.data('color',intToHex(acoColor.int));
								acoColorDiv.on('click', clickAcoColor);

								acoColorPicker.append(acoColorDiv);
							}
						}
					}
				});
			},
			//Shows the picker
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colpickId')) {
						show.apply(this);
					}
				});
			},
			//Hides the picker
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colpickId')) {
						$('#' + $(this).data('colpickId')).hide();
					}
				});
			},
			//Sets a color as new and current (default)
			setColor: function(col, setCurrent) {
				setCurrent = (typeof setCurrent === "undefined") ? 1 : setCurrent;
				if (typeof col == 'string') {
					col = hexToHsb(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = rgbToHsb(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colpickId')) {
						var cal = $('#' + $(this).data('colpickId'));
						cal.data('colpick').color = col;
						cal.data('colpick').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));

						setNewColor(col, cal.get(0));
						cal.data('colpick').onChange.apply(cal.parent(), [col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el, 1]);
						if(setCurrent) {
							setCurrentColor(col, cal.get(0));
						}
					}
				});
			}
		};
	}();
	//Color space convertions
	var hexToRgb = function (hex) {
		var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
		return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
	};
	var hexToHsb = function (hex) {
		return rgbToHsb(hexToRgb(hex));
	};
	var rgbToHsb = function (rgb) {
		var hsb = {h: 0, s: 0, b: 0};
		var min = Math.min(rgb.r, rgb.g, rgb.b);
		var max = Math.max(rgb.r, rgb.g, rgb.b);
		var delta = max - min;
		hsb.b = max;
		hsb.s = max != 0 ? 255 * delta / max : 0;
		if (hsb.s != 0) {
			if (rgb.r == max) hsb.h = (rgb.g - rgb.b) / delta;
			else if (rgb.g == max) hsb.h = 2 + (rgb.b - rgb.r) / delta;
			else hsb.h = 4 + (rgb.r - rgb.g) / delta;
		} else hsb.h = -1;
		hsb.h *= 60;
		if (hsb.h < 0) hsb.h += 360;
		hsb.s *= 100/255;
		hsb.b *= 100/255;
		return hsb;
	};
	var hsbToRgb = function (hsb) {
		var rgb = {};
		var h = hsb.h;
		var s = hsb.s*255/100;
		var v = hsb.b*255/100;
		if(s == 0) {
			rgb.r = rgb.g = rgb.b = v;
		} else {
			var t1 = v;
			var t2 = (255-s)*v/255;
			var t3 = (t1-t2)*(h%60)/60;
			if(h==360) h = 0;
			if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
			else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
			else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
			else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
			else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
			else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
			else {rgb.r=0; rgb.g=0;	rgb.b=0}
		}
		return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
	};
	var rgbToHex = function (rgb) {
		var hex = [
			rgb.r.toString(16),
			rgb.g.toString(16),
			rgb.b.toString(16)
		];
		$.each(hex, function (nr, val) {
			if (val.length == 1) {
				hex[nr] = '0' + val;
			}
		});
		return hex.join('');
	};
	var hsbToHex = function (hsb) {
		return rgbToHex(hsbToRgb(hsb));
	};
	$.fn.extend({
		colpick: colpick.init,
		colpickHide: colpick.hidePicker,
		colpickShow: colpick.showPicker,
		colpickSetColor: colpick.setColor
	});
	$.extend({
		colpick:{
			rgbToHex: rgbToHex,
			rgbToHsb: rgbToHsb,
			hsbToHex: hsbToHex,
			hsbToRgb: hsbToRgb,
			hexToHsb: hexToHsb,
			hexToRgb: hexToRgb
		}
	});
})(jQuery);
