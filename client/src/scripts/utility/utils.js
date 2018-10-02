/* -------------------------------------------------------------------------------------------------
** Utility functions
** ---------------------------------------------------------------------------------------------- */
'use strict'

// import $ from 'jquery'
// import { ANIMATION } from '../settings/animation.settings'

// import $ from 'jquery'
// import { ANIMATION } from '../settings/animation.settings'

// function scrollToTop(duration) {
//     return $('html, body').animate({
//         scrollTop: 0
//     }, { duration: (duration || ANIMATION.DURATION) })
// } // /scrollToTop()

// function scrollElementToTop($element, duration) {
//     return $element.animate({
//         scrollTop: 0
//     }, { duration: (duration || ANIMATION.DURATION) })
// } // /scrollElementToTop()

// function scrollToElement($element, duration) {
//     return $('html, body').animate({
//         scrollTop: (function(){
//             var $NAV_CONTAINER = $('.site-nav'),
//                 $NAV_BAR       = $NAV_CONTAINER.find('.site-nav__inner')

//             if ($NAV_CONTAINER.length && $NAV_BAR.length) {
//                 return $element.offset().top - $NAV_BAR.height()
//             } else {
//                 return $element.offset().top
//             }
//         })()
//     }, { duration: (duration || ANIMATION.DURATION) })
// } // /scrollToElement

// Function to determine whether element is within y-axis viewport boundaries
// ---------------------------------------------------------------------------------------------
function isInViewport(element) {
    var rect = element.getBoundingClientRect()

    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    )
} // /isInViewport($element)

// Function to determine whether element is within both y- and x-axis viewport boundaries
// ---------------------------------------------------------------------------------------------
function isReallyInViewport(element) {
    var rect = element.getBoundingClientRect()

    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.bottom >= 0 &&
        rect.left >= 0
    )
} // /isReallyInViewport

// Function to determine whether element is within y-axis viewport boundaries, but with a
// tolerance of 20% of the viewport height
// ---------------------------------------------------------------------------------------------
function isSortOfInViewport(element) {
    var rect = element.getBoundingClientRect(),
        windowHeight = (window.innerHeight || document.documentElement.clientHeight)

    return (
        rect.top <= (windowHeight - (windowHeight * 0.15)) &&
        rect.bottom >= 0
    )
} // /isSortOfInViewport($element)

// Function to determine whether element top has reached viewport top
// ---------------------------------------------------------------------------------------------
function isPastViewportTop(element) {
    var rect = element.getBoundingClientRect()

    return (
        rect.top <= 0
    )
} // /isPastViewportTop

// Function to determine whether element bottom has reached viewport bottom
// ---------------------------------------------------------------------------------------------
function isPastViewportBottom(element) {
    var rect = element.getBoundingClientRect()

    return (
        rect.bottom <= window.innerHeight
    )
} // /isPastViewportBottom

// Handle global 'in viewport' detection
// ---------------------------------------------------------------------------------------------
// function inViewportDetect() {
//     let uniqueIdCounter = 0

//     function determineInView ($elem, eventNamespace) {
//         return window.requestAnimationFrame(function() {
//             if (isSortOfInViewport($elem[0])) {
//                 $(window).off(('scroll' + eventNamespace))

//                 return $elem.addClass('in-view')
//             } /*else {
//                 return $elem.removeClass('in-view')
//             }*/
//         }) // /return window.requestAnimationFrame...
//     } // /function determineInView

//     function determineInViewSet ($elem, $itemSet, eventNamespace) {
//         return window.requestAnimationFrame(function() {
//             if (isSortOfInViewport($elem[0])) {
//                 $(window).off(('scroll' + eventNamespace))

//                 $elem.addClass('in-view')

//                 $itemSet.each(function(i) {
//                     var $item = $(this)

//                     setTimeout(function() {
//                         $item.addClass('in-view')
//                     }, (($elem.data('viewport-detect-delay') || ANIMATION.DURATION) * i))
//                 }) // /$itemSet.each(function(i)
//             } /*else {
//                 return $elem.removeClass('in-view')
//             }*/
//         }) // /return window.requestAnimationFrame...
//     } // /function determineInViewSet

//     if ($('[js-viewport-detect]').length) {
//         $('[js-viewport-detect]').each(function () {
//             var $self = $(this),
//                 eventNamespace = '.inViewportDetect_' + (uniqueIdCounter++).toString()

//             determineInView($self, eventNamespace)

//             $(window).on(('scroll' + eventNamespace), function () {
//                 return determineInView($self, eventNamespace)
//             }) // /$(window).on('scroll.inViewportDetect'...
//         })
//     } // /if ($('[data-custom-select]').length)

//     if ($('[js-viewport-detect-set]').length) {
//         $('[js-viewport-detect-set]').each(function () {
//             var $self          = $(this),
//                 $items         = $self.find('[js-viewport-detect-set-item]'),
//                 eventNamespace = '.inViewportDetectSet_' + (uniqueIdCounter++).toString()

//             determineInViewSet($self, $items, eventNamespace)

//             $(window).on(('scroll' + eventNamespace), function () {
//                 return determineInViewSet($self, $items, eventNamespace)
//             }) // /$(window).on('scroll.inViewportDetect'...
//         })
//     } // /if ($('[data-custom-select]').length)
// } // /inViewportDetect


function UADetect() {
    // Detect OSX, add class to html element - used for OSX-only font-smoothing
    var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0

    if (isMac) {
        document.documentElement.classList.add('osx')
    }
} // /function UADetect()

// NodeList.forEach workaround - https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
// ---------------------------------------------------------------------------------------------------------------------
function forEach(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]) // passes back stuff we need
    }
} // /function forEach(array, callback, scope)

export {
    // scrollToTop,
    // scrollElementToTop,
    // scrollToElement,
    isInViewport,
    isReallyInViewport,
    isSortOfInViewport,
    isPastViewportTop,
    isPastViewportBottom,
    inViewportDetect,
    UADetect,
    forEach
}
