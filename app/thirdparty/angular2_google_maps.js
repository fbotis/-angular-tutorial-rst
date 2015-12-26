System.registerDynamic("angular2_google_maps/services/maps_api_loader/noop_maps_api_loader.js", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var NoOpMapsAPILoader = (function() {
    function NoOpMapsAPILoader() {}
    NoOpMapsAPILoader.prototype.load = function() {
      if (!window.google || !window.google.maps) {
        throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
      }
      return Promise.resolve();
    };
    ;
    return NoOpMapsAPILoader;
  })();
  exports.NoOpMapsAPILoader = NoOpMapsAPILoader;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("angular2_google_maps/services.js", ["angular2_google_maps/services/maps_api_loader/maps_api_loader.js", "angular2_google_maps/services/maps_api_loader/noop_maps_api_loader.js", "angular2_google_maps/services/maps_api_loader/lazy_maps_api_loader.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var maps_api_loader_1 = $__require('angular2_google_maps/services/maps_api_loader/maps_api_loader.js');
  exports.MapsAPILoader = maps_api_loader_1.MapsAPILoader;
  var noop_maps_api_loader_1 = $__require('angular2_google_maps/services/maps_api_loader/noop_maps_api_loader.js');
  exports.NoOpMapsAPILoader = noop_maps_api_loader_1.NoOpMapsAPILoader;
  var lazy_maps_api_loader_1 = $__require('angular2_google_maps/services/maps_api_loader/lazy_maps_api_loader.js');
  exports.LazyMapsAPILoader = lazy_maps_api_loader_1.LazyMapsAPILoader;
  exports.LazyMapsAPILoaderConfig = lazy_maps_api_loader_1.LazyMapsAPILoaderConfig;
  exports.GoogleMapsScriptProtocol = lazy_maps_api_loader_1.GoogleMapsScriptProtocol;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("angular2_google_maps/directives_const.js", ["angular2_google_maps/directives/google_map.js", "angular2_google_maps/directives/google_map_marker.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var google_map_1 = $__require('angular2_google_maps/directives/google_map.js');
  var google_map_marker_1 = $__require('angular2_google_maps/directives/google_map_marker.js');
  exports.ANGULAR2_GOOGLE_MAPS_DIRECTIVES = [google_map_1.SebmGoogleMap, google_map_marker_1.SebmGoogleMapMarker];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("angular2_google_maps/directives/google_map_marker.js", ["angular2/core", "angular2_google_maps/services/marker_manager.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var marker_manager_1 = $__require('angular2_google_maps/services/marker_manager.js');
  var markerId = 0;
  var SebmGoogleMapMarker = (function() {
    function SebmGoogleMapMarker(_markerManager) {
      this._markerManager = _markerManager;
      this.markerClick = new core_1.EventEmitter();
      this._markerAddedToManger = false;
      this._id = (markerId++).toString();
    }
    SebmGoogleMapMarker.prototype.ngOnChanges = function(changes) {
      var _this = this;
      if (!this._markerAddedToManger && this.latitude && this.longitude) {
        this._markerManager.addMarker(this);
        this._markerAddedToManger = true;
        this._markerManager.createClickObserable(this).subscribe(function() {
          _this.markerClick.next(null);
        });
        return;
      }
      if (changes['latitude'] || changes['logitude']) {
        this._markerManager.updateMarkerPosition(this);
      }
      if (changes['title']) {
        this._markerManager.updateTitle(this);
      }
      if (changes['label']) {
        this._markerManager.updateLabel(this);
      }
    };
    SebmGoogleMapMarker.prototype.id = function() {
      return this._id;
    };
    SebmGoogleMapMarker.prototype.toString = function() {
      return 'SebmGoogleMapMarker-' + this._id.toString();
    };
    SebmGoogleMapMarker.prototype.ngOnDestroy = function() {
      this._markerManager.deleteMarker(this);
    };
    __decorate([core_1.Input(), __metadata('design:type', Number)], SebmGoogleMapMarker.prototype, "latitude", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], SebmGoogleMapMarker.prototype, "longitude", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], SebmGoogleMapMarker.prototype, "title", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], SebmGoogleMapMarker.prototype, "label", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], SebmGoogleMapMarker.prototype, "markerClick", void 0);
    SebmGoogleMapMarker = __decorate([core_1.Directive({selector: 'sebm-google-map-marker'}), __metadata('design:paramtypes', [marker_manager_1.MarkerManager])], SebmGoogleMapMarker);
    return SebmGoogleMapMarker;
  })();
  exports.SebmGoogleMapMarker = SebmGoogleMapMarker;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("angular2_google_maps/services/marker_manager.js", ["angular2/core", "rxjs/Observable", "angular2_google_maps/services/google_maps_api_wrapper.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var Observable_1 = $__require('rxjs/Observable');
  var google_maps_api_wrapper_1 = $__require('angular2_google_maps/services/google_maps_api_wrapper.js');
  var MarkerManager = (function() {
    function MarkerManager(_mapsWrapper) {
      this._mapsWrapper = _mapsWrapper;
      this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function(marker) {
      var promise = this._markers.get(marker).then(function(m) {
        return m.setMap(null);
      });
      this._markers.delete(marker);
      return promise;
    };
    MarkerManager.prototype.updateMarkerPosition = function(marker) {
      return this._markers.get(marker).then(function(m) {
        return m.setPosition({
          lat: marker.latitude,
          lng: marker.longitude
        });
      });
    };
    MarkerManager.prototype.updateTitle = function(marker) {
      return this._markers.get(marker).then(function(m) {
        return m.setTitle(marker.title);
      });
    };
    MarkerManager.prototype.updateLabel = function(marker) {
      return this._markers.get(marker).then(function(m) {
        var label = m.getLabel();
        label.text = marker.label;
        m.setLabel(label);
      });
    };
    MarkerManager.prototype.addMarker = function(marker) {
      var markerPromise = this._mapsWrapper.createMarker({
        position: {
          lat: marker.latitude,
          lng: marker.longitude
        },
        label: marker.label
      });
      this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.createClickObserable = function(marker) {
      var _this = this;
      return Observable_1.Observable.create(function(observer) {
        _this._markers.get(marker).then(function(m) {
          m.addListener('click', function() {
            observer.next(null);
          });
        });
      });
    };
    MarkerManager = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper])], MarkerManager);
    return MarkerManager;
  })();
  exports.MarkerManager = MarkerManager;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("angular2_google_maps/services/google_maps_api_wrapper.js", ["angular2/core", "rxjs/Observable", "angular2_google_maps/services/maps_api_loader/maps_api_loader.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var Observable_1 = $__require('rxjs/Observable');
  var maps_api_loader_1 = $__require('angular2_google_maps/services/maps_api_loader/maps_api_loader.js');
  var GoogleMapsAPIWrapper = (function() {
    function GoogleMapsAPIWrapper(_loader) {
      var _this = this;
      this._loader = _loader;
      this._createObservables();
      this._map = new Promise(function(resolve) {
        _this._mapResolver = resolve;
      });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function(el, latitude, longitude) {
      var _this = this;
      return this._loader.load().then(function() {
        var map = new google.maps.Map(el, {center: {
            lat: latitude,
            lng: longitude
          }});
        _this._mapResolver(map);
        return;
      });
    };
    GoogleMapsAPIWrapper.prototype.createEventObservable = function(eventName, callback) {
      var _this = this;
      return Observable_1.Observable.create(function(observer) {
        _this._map.then(function(m) {
          return m.addListener(eventName, function() {
            callback(observer);
          });
        });
      });
    };
    GoogleMapsAPIWrapper.prototype._createObservables = function() {
      var _this = this;
      this._centerChangeObservable = this.createEventObservable('center_changed', function(observer) {
        _this._map.then(function(map) {
          var center = map.getCenter();
          observer.next({
            lat: center.lat(),
            lng: center.lng()
          });
        });
      });
      this._zoomChangeObservable = this.createEventObservable('zoom_changed', function(observer) {
        _this._map.then(function(map) {
          observer.next(map.getZoom());
        });
      });
    };
    GoogleMapsAPIWrapper.prototype.createMarker = function(options) {
      if (options === void 0) {
        options = {};
      }
      return this._map.then(function(map) {
        options.map = map;
        return new google.maps.Marker(options);
      });
    };
    GoogleMapsAPIWrapper.prototype.getZoomChangeObserable = function() {
      return this._zoomChangeObservable;
    };
    GoogleMapsAPIWrapper.prototype.getCenterChangeObservable = function() {
      return this._centerChangeObservable;
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function(latLng) {
      return this._map.then(function(map) {
        return map.setCenter(latLng);
      });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function(zoom) {
      return this._map.then(function(map) {
        return map.setZoom(zoom);
      });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function() {
      return this._map.then(function(map) {
        return map.getCenter();
      });
    };
    GoogleMapsAPIWrapper = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [maps_api_loader_1.MapsAPILoader])], GoogleMapsAPIWrapper);
    return GoogleMapsAPIWrapper;
  })();
  exports.GoogleMapsAPIWrapper = GoogleMapsAPIWrapper;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("angular2_google_maps/directives/google_map.js", ["angular2/core", "angular2_google_maps/services/google_maps_api_wrapper.js", "angular2_google_maps/services/marker_manager.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var google_maps_api_wrapper_1 = $__require('angular2_google_maps/services/google_maps_api_wrapper.js');
  var marker_manager_1 = $__require('angular2_google_maps/services/marker_manager.js');
  var SebmGoogleMap = (function() {
    function SebmGoogleMap(elem, _mapsWrapper, _zone, renderer) {
      this._longitude = 0;
      this._latitude = 0;
      this._zoom = 8;
      this._mapsWrapper = _mapsWrapper;
      this._zone = _zone;
      renderer.setElementClass(elem, 'sebm-google-map-container', true);
      var container = elem.nativeElement.querySelector('.sebm-google-map-container-inner');
      this._initMapInstance(container);
    }
    SebmGoogleMap.prototype._initMapInstance = function(el) {
      this._mapsWrapper.createMap(el, this._latitude, this._longitude);
      this._handleMapsCenterChanged();
      this._handleZoomChanged();
    };
    Object.defineProperty(SebmGoogleMap.prototype, "zoom", {
      set: function(value) {
        this._zoom = this._convertToDecimal(value);
        if (typeof this._zoom === 'number') {
          this._mapsWrapper.setZoom(this._zoom);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SebmGoogleMap.prototype, "longitude", {
      set: function(value) {
        this._longitude = this._convertToDecimal(value);
        this._updateCenter();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SebmGoogleMap.prototype, "latitude", {
      set: function(value) {
        this._latitude = this._convertToDecimal(value);
        this._updateCenter();
      },
      enumerable: true,
      configurable: true
    });
    SebmGoogleMap.prototype._convertToDecimal = function(value) {
      if (typeof value === 'string') {
        return parseFloat(value);
      } else if (typeof value === 'number') {
        return value;
      }
      return null;
    };
    SebmGoogleMap.prototype._updateCenter = function() {
      if (typeof this._latitude !== 'number' || typeof this._longitude !== 'number') {
        return;
      }
      this._mapsWrapper.setCenter({
        lat: this._latitude,
        lng: this._longitude
      });
    };
    SebmGoogleMap.prototype._handleMapsCenterChanged = function() {
      var _this = this;
      this._mapsWrapper.getCenterChangeObservable().subscribe(function(latLng) {
        _this._latitude = latLng.lat;
        _this._longitude = latLng.lng;
      });
    };
    SebmGoogleMap.prototype._handleZoomChanged = function() {
      var _this = this;
      this._mapsWrapper.getZoomChangeObserable().subscribe(function(zoom) {
        return _this._zoom = zoom;
      });
    };
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], SebmGoogleMap.prototype, "zoom", null);
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], SebmGoogleMap.prototype, "longitude", null);
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], SebmGoogleMap.prototype, "latitude", null);
    SebmGoogleMap = __decorate([core_1.Component({
      selector: 'sebm-google-map',
      providers: [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, marker_manager_1.MarkerManager],
      styles: ["\n    .sebm-google-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n  "],
      template: "\n    <div class=\"sebm-google-map-container-inner\"></div>\n    <ng-content></ng-content>\n  "
    }), __metadata('design:paramtypes', [core_1.ElementRef, google_maps_api_wrapper_1.GoogleMapsAPIWrapper, core_1.NgZone, core_1.Renderer])], SebmGoogleMap);
    return SebmGoogleMap;
  })();
  exports.SebmGoogleMap = SebmGoogleMap;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("angular2_google_maps/directives.js", ["angular2_google_maps/directives/google_map.js", "angular2_google_maps/directives/google_map_marker.js", "angular2_google_maps/directives_const.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var google_map_1 = $__require('angular2_google_maps/directives/google_map.js');
  exports.SebmGoogleMap = google_map_1.SebmGoogleMap;
  var google_map_marker_1 = $__require('angular2_google_maps/directives/google_map_marker.js');
  exports.SebmGoogleMapMarker = google_map_marker_1.SebmGoogleMapMarker;
  var directives_const_1 = $__require('angular2_google_maps/directives_const.js');
  exports.ANGULAR2_GOOGLE_MAPS_DIRECTIVES = directives_const_1.ANGULAR2_GOOGLE_MAPS_DIRECTIVES;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("angular2_google_maps/services/maps_api_loader/lazy_maps_api_loader.js", ["angular2/core", "angular2_google_maps/services/maps_api_loader/maps_api_loader.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var maps_api_loader_1 = $__require('angular2_google_maps/services/maps_api_loader/maps_api_loader.js');
  (function(GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 0] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 1] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 2] = "AUTO";
  })(exports.GoogleMapsScriptProtocol || (exports.GoogleMapsScriptProtocol = {}));
  var GoogleMapsScriptProtocol = exports.GoogleMapsScriptProtocol;
  var LazyMapsAPILoaderConfig = (function() {
    function LazyMapsAPILoaderConfig() {
      this.apiKey = null;
      this.hostAndPath = 'maps.googleapis.com/maps/api/js';
      this.protocol = GoogleMapsScriptProtocol.HTTPS;
    }
    return LazyMapsAPILoaderConfig;
  })();
  exports.LazyMapsAPILoaderConfig = LazyMapsAPILoaderConfig;
  var DEFAULT_CONFIGURATION = new LazyMapsAPILoaderConfig();
  var LazyMapsAPILoader = (function(_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(_config) {
      if (_config === void 0) {
        _config = DEFAULT_CONFIGURATION;
      }
      _super.call(this);
      this._config = _config;
    }
    LazyMapsAPILoader.prototype.load = function() {
      if (this._scriptLoadingPromise) {
        return this._scriptLoadingPromise;
      }
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      var callbackName = "angular2googlemaps" + new Date().getMilliseconds();
      script.src = this._getScriptSrc(callbackName);
      this._scriptLoadingPromise = new Promise(function(resolve, reject) {
        window[callbackName] = function() {
          resolve();
        };
        script.onerror = function(error) {
          reject(error);
        };
      });
      document.body.appendChild(script);
      return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function(callbackName) {
      var protocolType = (this._config && this._config.protocol) || DEFAULT_CONFIGURATION.protocol;
      var protocol;
      switch (protocolType) {
        case GoogleMapsScriptProtocol.AUTO:
          protocol = '';
          break;
        case GoogleMapsScriptProtocol.HTTP:
          protocol = 'http:';
          break;
        case GoogleMapsScriptProtocol.HTTPS:
          protocol = 'https:';
          break;
      }
      var hostAndPath = (this._config && this._config.hostAndPath) || DEFAULT_CONFIGURATION.hostAndPath;
      var apiKey = (this._config && this._config.apiKey) || DEFAULT_CONFIGURATION.apiKey;
      var queryParams = {};
      if (apiKey) {
        queryParams['key'] = apiKey;
      }
      queryParams['callback'] = callbackName;
      var queryParamsString = Object.keys(queryParams).map(function(key, index) {
        return index === 0 ? "?" + key + "=" + queryParams[key] : "&" + key + "=" + queryParams[key];
      }).join('');
      return protocol + "//" + hostAndPath + queryParamsString;
    };
    LazyMapsAPILoader = __decorate([core_1.Injectable(), __param(0, core_1.Optional()), __metadata('design:paramtypes', [LazyMapsAPILoaderConfig])], LazyMapsAPILoader);
    return LazyMapsAPILoader;
  })(maps_api_loader_1.MapsAPILoader);
  exports.LazyMapsAPILoader = LazyMapsAPILoader;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("angular2_google_maps/services/maps_api_loader/maps_api_loader.js", ["angular2/core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var MapsAPILoader = (function() {
    function MapsAPILoader() {}
    MapsAPILoader = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], MapsAPILoader);
    return MapsAPILoader;
  })();
  exports.MapsAPILoader = MapsAPILoader;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("angular2_google_maps/angular2_google_maps.js", ["angular2/core", "angular2_google_maps/services/maps_api_loader/maps_api_loader.js", "angular2_google_maps/services/maps_api_loader/lazy_maps_api_loader.js", "angular2_google_maps/directives.js", "angular2_google_maps/services.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var core_1 = $__require('angular2/core');
  var maps_api_loader_1 = $__require('angular2_google_maps/services/maps_api_loader/maps_api_loader.js');
  var lazy_maps_api_loader_1 = $__require('angular2_google_maps/services/maps_api_loader/lazy_maps_api_loader.js');
  __export($__require('angular2_google_maps/directives.js'));
  __export($__require('angular2_google_maps/services.js'));
  exports.ANGULAR2_GOOGLE_MAPS_PROVIDERS = [new core_1.Provider(maps_api_loader_1.MapsAPILoader, {useClass: lazy_maps_api_loader_1.LazyMapsAPILoader})];
  global.define = __define;
  return module.exports;
});

//# sourceMappingURL=angular2_google_maps.js.map