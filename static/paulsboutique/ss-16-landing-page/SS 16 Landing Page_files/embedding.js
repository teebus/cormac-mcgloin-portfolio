(function() {
  var Buyapowa, Frame,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Buyapowa = (function() {
    function Buyapowa(endpoint, parentElementId) {
      this.endpoint = endpoint;
      if (parentElementId == null) {
        parentElementId = null;
      }
      this.parentElement = document.getElementById(parentElementId);
      if (this.endpoint.substring(this.endpoint.length - 1) === "/") {
        this.endpoint = this.endpoint.substring(0, this.endpoint.length - 1);
      }
    }

    Buyapowa.prototype.embedCampaign = function(campaignSlug) {
      return this.frame = new Frame(this._buildUrl("cobuys/" + campaignSlug), this.parentElement);
    };

    Buyapowa.prototype.embedCampaignOrder = function(productSlug) {
      return this.frame = new Frame(this._buildUrl("process/" + productSlug), this.parentElement);
    };

    Buyapowa.prototype.embedInviteAFriend = function(extraParameters) {
      var fragmentPath, path, qsPath, slug;
      if (extraParameters == null) {
        extraParameters = {};
      }
      fragmentPath = this._getHashQueryParam("p");
      qsPath = this._getQueryParams().bp_p;
      path = qsPath ? decodeURIComponent(qsPath) : fragmentPath ? fragmentPath : extraParameters.campaign != null ? (slug = extraParameters.campaign, delete extraParameters.campaign, "/iaf/" + slug) : "/iaf";
      return this.frame = new Frame(this._buildUrl(path, extraParameters), this.parentElement);
    };

    Buyapowa.prototype.track = function(data, callback) {
      if (data == null) {
        data = {};
      }
      data.market = this._marketSlug();
      return this._ajaxPost((this._trackEndpoint()) + "/track", data, callback);
    };

    Buyapowa.prototype._buildUrl = function(path, extraParameters) {
      var key, params, paramsString, paramsStringParts, url;
      if (extraParameters == null) {
        extraParameters = {};
      }
      url = this.endpoint + path;
      params = this._getPassThroughQueryParams(extraParameters);
      if (this._getKeyCount(params) === 0) {
        return url;
      }
      paramsString = url.indexOf("?") === -1 ? "?" : "&";
      paramsStringParts = [];
      for (key in params) {
        paramsStringParts.push((encodeURIComponent(key)) + "=" + (encodeURIComponent(params[key])));
      }
      paramsString += paramsStringParts.join("&");
      return "" + url + paramsString;
    };

    Buyapowa.prototype._getKeyCount = function(object) {
      var key, result;
      result = 0;
      for (key in object) {
        result++;
      }
      return result;
    };

    Buyapowa.prototype._getPassThroughQueryParams = function(extraParameters) {
      var allParams, key, params;
      if (extraParameters == null) {
        extraParameters = {};
      }
      allParams = this._getQueryParams();
      params = extraParameters;
      for (key in allParams) {
        if (key.match(/^utm_/)) {
          params[key] = decodeURIComponent(allParams[key]);
        }
      }
      for (key in allParams) {
        if (key.match(/^bp_[a-z+]/)) {
          params[key.substring(3)] = decodeURIComponent(allParams[key]);
        }
      }
      params["http_referrer"] = document.referrer;
      return params;
    };

    Buyapowa.prototype._getQueryParams = function() {
      var match, query, search, urlParams;
      search = /([^&=]+)=?([^&]*)/g;
      query = window.location.search.substring(1);
      urlParams = {};
      while (match = search.exec(query)) {
        urlParams[match[1]] = match[2];
      }
      return urlParams;
    };

    Buyapowa.prototype._getHashQueryParam = function(key) {
      var i, len, pair, param, params, query;
      query = location.href.split("#")[1] || "";
      params = query.split("&");
      for (i = 0, len = params.length; i < len; i++) {
        param = params[i];
        pair = param.split("=");
        if (decodeURIComponent(pair[0]) === key) {
          return decodeURIComponent(pair[1]);
        }
      }
      return null;
    };

    Buyapowa.prototype._trackEndpoint = function() {
      var subdomainEnd, subdomainStart;
      subdomainStart = this.endpoint.indexOf("://") + 3;
      subdomainEnd = this.endpoint.indexOf(".", subdomainStart);
      return this.endpoint.substring(0, subdomainStart) + "track" + this.endpoint.substring(subdomainEnd);
    };

    Buyapowa.prototype._marketSlug = function() {
      var subdomainEnd, subdomainStart;
      subdomainStart = this.endpoint.indexOf("://") + 3;
      subdomainEnd = this.endpoint.indexOf(".", subdomainStart);
      return this.endpoint.substring(subdomainStart, subdomainEnd);
    };

    Buyapowa.prototype._ajaxPost = function(url, data, callback) {
      var e, key, p, str, value, x;
      try {
        x = new (window.XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0");
        x.withCredentials = true;
        x.open("POST", url, 1);
        x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        x.onreadystatechange = function() {
          return x.readyState > 3 && callback && callback(x.responseText, x);
        };
        str = [];
        for (p in data) {
          key = encodeURIComponent("client_data[" + p + "]");
          value = encodeURIComponent(data[p]);
          str.push(key + "=" + value);
        }
        return x.send(str.join("&"));
      } catch (_error) {
        e = _error;
        return window.console && console.log(e);
      }
    };

    return Buyapowa;

  })();

  Frame = (function() {
    var DEFAULT_STYLES;

    DEFAULT_STYLES = "width: 100%; box-sizing: border-box; border: 0; margin: 0; padding: 0; overflow: hidden;";

    function Frame(url, parentElement) {
      this._processMessage = bind(this._processMessage, this);
      var anchor;
      this.frame = document.createElement("object");
      this.frame.setAttribute("style", DEFAULT_STYLES);
      this.frame.setAttribute("type", "text/html");
      this.frame.setAttribute("data", url);
      anchor = document.createElement("a");
      anchor.name = "buyapowatop";
      parentElement.appendChild(anchor);
      parentElement.appendChild(this.frame);
      this.firstLoad = true;
      this._attachEvent("message", this._processMessage);
    }

    Frame.prototype._processMessage = function(e) {
      var parts;
      if (typeof e.data !== "string") {
        return;
      }
      parts = e.data.split(":");
      if (parts[0] !== "buyapowa") {
        return;
      }
      switch (parts[1]) {
        case "height":
          return this._resizeFrame(e.source, parts[2]);
        case "loaded":
          return this._loadedFrame();
        case "scroll":
          return this._scrollFrame(parts[2]);
        case "cookie_monster":
          return this._getACookieAndReturn(parts[2]);
        default:
          return window.console && console.log("Unknown message: " + e.data);
      }
    };

    Frame.prototype._getACookieAndReturn = function(cookieMonsterUrl) {
      return window.location.href = (decodeURIComponent(cookieMonsterUrl)) + "?r=" + (encodeURIComponent(window.location.href));
    };

    Frame.prototype._scrollFrame = function(offset) {
      var scrollTo;
      scrollTo = function(offset, duration) {
        var difference, scrollAmount;
        difference = offset - document.body.scrollTop;
        scrollAmount = difference / duration * 15;
        return setTimeout((function() {
          document.body.scrollTop = document.body.scrollTop + scrollAmount;
          if (document.body.scrollTop >= offset) {
            return;
          }
          return scrollTo(offset, duration - 15);
        }), 15);
      };
      offset = parseFloat(offset) + parseFloat(this.frame.offsetTop);
      if (!this._conflictingScrollAnimation()) {
        return scrollTo(offset, 1000);
      } else {
        return document.body.scrollTop = offset;
      }
    };

    Frame.prototype._conflictingScrollAnimation = function() {
      return (typeof jQuery !== "undefined" && jQuery !== null) && (jQuery.Tween != null) && (jQuery.Tween.propHooks != null) && (jQuery.Tween.propHooks.scrollTop != null);
    };

    Frame.prototype._resizeFrame = function(source, height) {
      return this.frame.style.height = parseInt(height) + 10 + "px";
    };

    Frame.prototype._loadedFrame = function() {
      if (this.firstLoad) {
        this.firstLoad = false;
        return;
      }
      window.location.hash = "";
      return window.location.hash = "buyapowatop";
    };

    Frame.prototype._attachEvent = function(eventName, fn) {
      if (window.addEventListener != null) {
        return addEventListener(eventName, fn, false);
      } else {
        return attachEvent("on" + eventName, fn);
      }
    };

    return Frame;

  })();

  window.Buyapowa = Buyapowa;

}).call(this);
