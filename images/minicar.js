var ajaxJson={};ajaxJson.url="/Handler/ShoppingHandler.ashx";ajaxJson.data={action:"ShoppingGetCar"};ajaxJson.callback=function(n){if(n.error==0&&n.data.length>0){$(".min-cart-empty").hide();$("#cart-items").show();for(var t in n.data)gobal.addItemToCart(n.data[t],function(n){var t={};t.url="/Handler/ShoppingHandler.ashx";t.data={cartId:$(n).attr("data-id"),action:"ShoppingDelCart"};t.callback=function(t){t.error==0?gobal.removeCartItem(n):alert(t.msg)};gobal.reqAjax(t)})}else $(".min-cart-empty").show(),$("#cart-items").hide()};gobal.reqAjax(ajaxJson);