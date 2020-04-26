const clickDropDown = (boxClicked, isSubMenuClicked, removeDropDown, removeSubMenu, isBox) => {
    
    if (boxClicked.hasClass('open')) {
        boxClicked.removeClass('open');
        $(isSubMenuClicked).slideUp('fast');
        return;
    } 
    closeAllBox(isBox, removeSubMenu);
    removeDropDown.removeClass('open');
    removeSubMenu.slideUp('fast');

    boxClicked.addClass('open');
    $(isSubMenuClicked).slideDown('fast');
}

const clickBasicBox = (boxClicked, $isBox, isSubMenuDropDown) => {
    closeAllBox($isBox, isSubMenuDropDown);
    boxClicked.addClass('selected');
}

const closeAllBox = ($isBox, isSubMenuDropDown) => {
    $isBox.removeClass('open');
    $isBox.removeClass('selected');
    $(isSubMenuDropDown).slideUp('fast');
}

const dropDownmenu = ($container = 'body') => {
    
    const $isBox = $(".box", $container);
        
    if (!$isBox.length) {
        return;
    }
    
    const $isSubMenuDropDown = $("ul.sub-menu-dropdown");
    $isSubMenuDropDown.hide();

    $isBox
    .off('click.is-box')
    .on('click.is-box', () => {
        const $this = $(event.target)
            .closest('.box-container')
            .find(".box")
            .first();
            
        console.log('click', $this);

        const parentBoxPageOrInfo = $this
            .closest('.page-container__page, .page-container__info')
            .length;

        const $isDropDown = $this
            .hasClass("box--drop-down")
            ? $("box--drop-down")
            : false;

        console.log('parente', parentBoxPageOrInfo, 'isdrop', $isDropDown);

        if (parentBoxPageOrInfo && $isDropDown) {
            const $isSubMenuClicked = $this.closest('.box-container').find("ul.sub-menu-dropdown").first();

            //const $dropDownClick = $this.closest('.box-container').find(".box--drop-down").first();

            return clickDropDown($this, $isSubMenuClicked, $isDropDown, $isSubMenuDropDown, $isBox);
        }
        else if (parentBoxPageOrInfo) {
            return clickBasicBox($this, $isBox, $isSubMenuDropDown);
        }
        else {
            const $isBoxTabs = $('.page-container__tabs .box-container'); console.log('cuales', $isBoxTabs); 
            closeAllBox($isBox, $isSubMenuDropDown);
            $isBoxTabs.removeClass('selected');
            $this.closest('.box-container').addClass('selected');
        }
    });

    // $isDropDown
    // .off('click.dropdown-info')
    // .on('click.dropdown-info', () => {

    //     const $this = $(event.target);
    //     const $isSubMenu = $this.closest('.box-container').find("ul.sub-menu-dropdown").first();

    //     const $dropDownClick = $this.closest('.box-container').find(".box--drop-down").first();
    //     clickDropDown($dropDownClick, $isSubMenu, $isDropDown, $isSubMenuDropDown);
    // });
}


$(() => {
    dropDownmenu();
});