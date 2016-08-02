import 'bus-detective/utils/vehicle_marker';

window.L.Map = window.L.Map.extend({
  openPopup: function(popup) {
    //        this.closePopup();  // just comment this
    this._popup = popup;

    return this.addLayer(popup).fire('popupopen', {
      popup: this._popup
    });
  }
})

export default window.L;
