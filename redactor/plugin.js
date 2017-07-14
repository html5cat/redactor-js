$.fn.myplugin = function()
{
    return {
        init: function()
        {
            this.myplugin.show();
        },
        show: function()
        {
            console.log('myplugin show');
        }
    };
};


// $(".redactor_ redactor_editor").find('a').click(function(){
//     alert('a clicked');
// });