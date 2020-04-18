
const dropDownmenu = () => {
    console.log('AAA');
    const $isDropDown = $("a.dropdwon");
    
    if (!$isDropDown) {
        return;
    }
console.log('rrr');
    const $isSubMenuDropDown = $("ul.sub-menu-dropdown");
    $isSubMenuDropDown.hide();

    $isDropDown.hover(function(){
        $this =$(this);
        const $isSubMenu = $this.closest('.container-dropdown').find("ul.sub-menu-dropdown").get(0);
        $this.addClass("hover");
        $($isSubMenu).slideDown('fast');
    
    }, function(){
        const $isSubMenu = $this.closest('.container-dropdown').find("ul.sub-menu-dropdown").get(0);
        $(this).removeClass("hover");
        $($isSubMenu).slideUp('fast');
    
    });

}


$(() => {
    dropDownmenu();
});