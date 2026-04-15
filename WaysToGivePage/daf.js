if (
    ((typeof CSS == "undefined" || typeof CSS.escape != "function") &&
        console.warn("CSS.escape is not supported in this browser."),
    typeof _msdaf_inline != "undefined")
) {
    if (location.host == "127.0.0.1" || location.host == "localhost")
        var urlPath = location.protocol + "//" + location.host,
            dafInline,
            dafLink,
            dafModule;
    else urlPath = "https://app.dafwidget.com";
    ((dafInline =
        '<link rel="stylesheet" type="text/css" href="' +
        urlPath +
        '/public/inline.css" />' +
        `
				<div id="outer">
					<div id="daf_modal">
						<div id="daf_modal_content" class="inline-daf-content">
							<div id="modalBody" class="modal-body inline-daf-body">
								<input type="text" list="daf_list" id="daf-input" class="modal-input-field inline-daf-input" autocomplete="off" placeholder="Enter donor-advised fund name"/>
								<datalist id="daf_list"></datalist>
								<button class="modal-submit-button inline-daf-submit" onclick="dafModule.clickedSubmit()" id="daf-submit" target="_blank">GO &raquo;</button>
								<div id="terms" class="widget-terms daf-inline-terms">By using this search tool, you agree to the <a href="https://dafwidget.com/terms-and-privacy-policy/" target="_blank" aria-label="Terms of Service and Privacy Policy (opens to a new tab)" role="link">Terms of Service and Privacy Policy</a>. Don't see your fund? <a id="support" class="support-link daf-inline-support" target="_blank" href="https://dafwidget.com/add-a-new-fund-to-the-dafwidget/" aria-label="Add a New Fund to the dafwidget (opens to a new tab)" role="link">Let us know.</a></div>
							</div>
						</div>
					</div>
				</div>
			`),
        document.write(dafInline));
} else
    ((dafLink =
        '<a id="daf_link" class="daf-button-link" onclick="dafModule.openModal(event);" href="#">Give now from your<br>Donor-Advised Fund</a>'),
        document.write(dafLink));
window.dafModule ||
    (dafModule = (function () {
        if (location.host == "127.0.0.1" || location.host == "localhost")
            var e,
                o,
                i,
                t = location.protocol + "//" + location.host;
        else t = "https://app.dafwidget.com";
        ((e = {}),
            typeof _msdaf_inline == "undefined" &&
                ((i =
                    '<link rel="stylesheet" type="text/css" href="' +
                    t +
                    '/public/button.css" />' +
                    `
				<div id="outer" style="display: none;">
					<div id="daf_modal" class="daf-modal">
						<div id="daf_modal_content" class="daf-modal-content">
							<div id="close_daf_modal" class="modal-close-btn">&times;</div>
							<div id="modalBody" class="modal-body">
								<label id="modalTitle" for="daf-input" class="modal-title">Give from your<br />donor-advised fund:</label>
								<input type="text" list="daf_list" id="daf-input" class="modal-input-field" autocomplete="off" placeholder="Enter donor-advised fund name"/>
								<datalist id="daf_list"></datalist>
								<button class="modal-submit-button" onclick="dafModule.clickedSubmit()" id="daf-submit" target="_blank">GO &raquo;</button>
								<div id="terms" class="widget-terms">By using this search tool, you agree to the <a href="https://dafwidget.com/terms-and-privacy-policy/" target="_blank">Terms of Service and Privacy Policy</a>.</div>
							</div>
							<div id="daf_modal_footer" class="modal-footer">
								<a id="support" class="support-link" target="_blank" href="https://dafwidget.com/add-a-new-fund-to-the-dafwidget/">Don't see your fund? Let us know.</a>
							</div>
						</div>
					</div>
				</div>
			`),
                document.write(i)),
            (o = !0),
            window.addEventListener("DOMContentLoaded", function () {
                ((o = !1),
                    (outer = document.getElementById("outer")),
                    (outer.style.display = "block"),
                    (document.getElementById("daf-submit").disabled = !0),
                    document.getElementById("daf-input").addEventListener("input", h),
                    typeof _msdaf_inline != "undefined" && typeof _msdaf_preselect != "undefined"
                        ? a()
                        : typeof _msdaf_inline == "undefined" &&
                          typeof _msdaf_preselect != "undefined" &&
                          document.getElementById("daf_link").addEventListener("click", a));
            }),
            document.readyState === "loading" &&
                window.addEventListener("load", function () {
                    o && window.dispatchEvent(new Event("DOMContentLoaded"));
                }));
        function n() {
            for (var e = document.getElementById("daf_list"); e.lastChild; ) e.removeChild(e.lastChild);
        }
        function c() {
            ((document.getElementById("daf-input").value = ""), (e = {}));
        }
        function l(e) {
            var o = new XMLHttpRequest(),
                i = t + "/api/v1/search?key=" + encodeURIComponent(e) + "&id=" + _msdaf_id;
            (o.open("GET", i, !0),
                o.send(),
                (o.onreadystatechange = function () {
                    if (o.readyState === 4 && o.status === 200) {
                        n();
                        var t = JSON.parse(o.responseText);
                        (t &&
                            t.length !== 0 &&
                            t.forEach(function (e) {
                                var t = document.createElement("option");
                                ((t.value = e.value),
                                    (t.id = e.id),
                                    t.setAttribute("data-url", e.url),
                                    document.getElementById("daf_list").appendChild(t));
                            }),
                            document.getElementById("daf-input").focus(),
                            (selected = document.querySelectorAll("[value=" + CSS.escape(e) + "]")[0]),
                            selected && s(selected));
                    }
                }));
        }
        function d(e) {
            var o = new XMLHttpRequest(),
                i = t + "/api/v1/search?org_id=" + e;
            (o.open("GET", i, !0),
                o.send(),
                (o.onreadystatechange = function () {
                    if (o.readyState === 4 && o.status === 200) {
                        n();
                        var e = JSON.parse(o.responseText);
                        (e &&
                            e.length !== 0 &&
                            e.forEach(function (e) {
                                var t = document.createElement("option");
                                ((t.value = e.value),
                                    (t.id = e.id),
                                    t.setAttribute("data-url", e.url),
                                    t.setAttribute("selected", "selected"),
                                    document.getElementById("daf_list").appendChild(t));
                            }),
                            document.getElementById("daf-input").focus(),
                            (selected = document.querySelectorAll("[value=" + CSS.escape(e[0].value) + "]")[0]),
                            (document.getElementById("daf-input").value = e[0].value),
                            selected && s(selected));
                    }
                }));
        }
        function u(e, t, n) {
            var s;
            return function () {
                var i = this,
                    a = arguments,
                    r = function () {
                        ((s = null), n || e.apply(i, a));
                    },
                    c = n && !s;
                (clearTimeout(s), (s = setTimeout(r, t)), c && e.apply(i, a));
            };
        }
        function s(t) {
            ((e.name = t.getAttribute("value")),
                (e.id = t.getAttribute("id")),
                (e.url = t.getAttribute("data-url")),
                (document.getElementById("daf-submit").disabled = !1));
        }
        function a() {
            if (typeof _msdaf_preselect == "undefined") return;
            d(_msdaf_preselect);
        }
        function h(e) {
            var o,
                i,
                t = e.target.value,
                a = document.getElementById("daf-submit");
            ((a.disabled = !0),
                n(),
                t &&
                    ((o = document.querySelectorAll("[value=" + CSS.escape(t) + "]")[0]),
                    o
                        ? s(o)
                        : ((i = u(function () {
                              l(t);
                          }, 150)),
                          i())));
        }
        function r(e, n) {
            var s = new XMLHttpRequest(),
                o = t + "/api/v1/action/" + e.toString() + "?token=" + _msdaf_id + "&daf_url_id=" + n;
            (s.open("GET", o, !0), s.send());
        }
        function m() {
            (typeof _paq != "undefined" &&
                typeof _msdaf_inline != "undefined" &&
                _paq.push(["trackEvent", "GoDAFwidget", "Click"]),
                window.open(e.url, "_blank"),
                r(2, e.id));
        }
        function f(e) {
            (e.preventDefault(), c(), n(), r(1, ""));
            var t = document.getElementById("daf_modal"),
                s = document.getElementById("close_daf_modal");
            ((t.style.opacity = 1),
                (t.style.visibility = "visible"),
                (s.onclick = function () {
                    ((t.style.opacity = 0), (t.style.visibility = "hidden"));
                }),
                (window.onclick = function (e) {
                    e.target === t && ((t.style.visibility = "hidden"), (t.style.opacity = 0));
                }),
                typeof _paq != "undefined" && _paq.push(["trackEvent", "ClickedDAFwidget", "Click"]));
        }
        return { openModal: f, clickedSubmit: m };
    })());
