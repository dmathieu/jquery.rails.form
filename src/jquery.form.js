(function($) {
  $.form = function(options, content) {
    if (content == undefined) {
      content = options;
      options = {};
    }
    return $._form(options, content);
  },
  
  
  $._form = function(options, content) {
    var options = $.extend({
      method: 'post',
      action: '#'
    }, options);
    
    csrf_token = $('meta[name=csrf-token]').attr('content');
    csrf_param = $('meta[name=csrf-param]').attr('content');
    
    
    var template = {
      html: "<form {{>settings}}>\
        {{{content}}}\
        {{>csrf}}\
      </form>",
      views: {
        settings: {
          options: function() {
            /*
             * Mustache doesn't allow to dynamically loop through all the elements of an object
             * So we must transform it to an array to be able to display those options
             */
            var result = [];
            for(i in options) {
              if (!/^_/.test(i))
                result.push({key: i, value: options[i]});
            }
            return result;
          }
        },
        
        csrf: {
          param: function() {
            return csrf_param;
          },
          token: function() {
            return csrf_token;
          }
        },
        
        content: function() {
          return content;
        }
      },
      
      partials: {
        settings: "{{#options}}\
          {{key}}=\"{{value}}\"\
        {{/options}}",
        
        csrf: "<input name=\"{{param}}\" value=\"{{token}}\" type=\"hidden\" />"
      },
      
      render: function() {
        return Mustache.to_html(this.html, this.views, this.partials);
      }
    }
    
    return template.render();
  }
})(jQuery);
