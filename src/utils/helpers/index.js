export const scrollHeader = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        return true;
    }
    return false;
};
