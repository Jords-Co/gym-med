/**
 * Blur Property Filter.
 * 
 * @link https://gsap.com/community/forums/topic/23666-simple-blur-and-fade-in-on-text/
 */
(function () {
    const blurProperty = gsap.utils.checkPrefix("filter"),
        blurExp = /blur\((.+)?px\)/,
        getBlurMatch = target => (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];
    gsap.registerPlugin({
        name: "blur",
        get(target) {
            return +(getBlurMatch(target)[1]) || 0;
        },
        init(target, endValue) {
            let data = this,
                filter = gsap.getProperty(target, blurProperty),
                endBlur = "blur(" + endValue + "px)",
                match = getBlurMatch(target)[0],
                index;
            if (filter === "none") {
                filter = "";
            }
            if (match) {
                index = filter.indexOf(match);
                endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
            } else {
                endValue = filter + endBlur;
                filter += filter ? " blur(0px)" : "blur(0px)";
            }
            data.target = target;
            data.interp = gsap.utils.interpolate(filter, endValue);
        },
        render(progress, data) {
            data.target.style[blurProperty] = data.interp(progress);
        }
    });
})();

/**
 * Blur in Elements.
 * 
 * @author <cabal@digerati.design>
 */
export const blurInElements = () => {
    const elements = document.querySelectorAll('.text-style-hidden');
    if (!elements) {
        return;
    }
    /**
    * Elements exist, no need to register either
    * ScrollTrigger or SplitText as they're
    * already registered by Webflow
    */
    elements.forEach((element) => {
        new MutationObserver(function () {
            element.classList.remove('text-style-hidden');
            element.classList.add('split-type-gradient-chars');
        }).observe(element, {
            subtree: true,
            childList: true
        });
        let split = new SplitText(element, {
            type: 'chars,words,lines',
            position: 'absolute'
        }); /* Possible new solution for Gradient Text if Jords wants it: https://codepen.io/tomasomnc/pen/vEYdqYp */
        gsap.from(split.chars, {
            ease: 'ease',
            duration: 1,
            y: 20,
            blur: 10,
            autoAlpha: 0,
            stagger: 0.025,
            scrollTrigger: {
                trigger: element,
                start: 'bottom bottom',
                end: 'top center',
            },
        });
    });
};

