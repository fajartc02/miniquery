/*!
 * miniquery
 */


/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {
    static select(selector) {
        return document.querySelectorAll(selector)
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

class DOM {
    static hide(param) {
        var item = document.querySelectorAll(param);
        item.forEach(key => {
            key.style.visibility = 'hidden'
        })
    }

    static show(param) {
        var item = document.querySelectorAll(param);
        item.forEach(key => {
            key.style.visibility = 'visible'
        })
    }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

class EventDispatcher {
    static on(item, click, callback) {
        var selector = SweetSelector.select(item)
        selector.forEach(elem => {
            elem.addEventListener(click, callback)
        })
    }

    static trigger(item, click) {
        let trigger = new Event(item)
        let selector = SweetSelector.select(click)
        selector.forEach(elem => {
            elem.dispatchEvent(trigger)
        })
    }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

class AjaxWrapper {
    static request(obj) {
        let method = obj.type || 'GET'
        let url = obj.url
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            // console.log(this);
            if (this.readyState == 4) { // readyState 4 means the request is done
                if (this.statusText == 200) { // status 200 is a successful return.
                    obj.success(this.responseText)
                } else {
                    obj.fail(this.responseText)
                }
            }
        };
        xhttp.open(method, url, true);
        xhttp.send();
    }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

 const miniquery = function (selector) {
    return SweetSelector.select(selector)
 }