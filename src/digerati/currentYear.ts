/**
 * Current Year.
 * 
 * @author <cabal@digerati.design>
 */
export const currentYear = () => {
    const target = document.querySelector('[dd-date="currentYear"]');
    if (!target) {
        return;
    }
    target.innerText = new Date().getFullYear().toString();
};

