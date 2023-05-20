export default function validateInput(data, setErrorInput) {
    if (!data.duration) {
        setErrorInput((prev) => ({ ...prev, duration: true }));
        return true;
    }
    if (!data.title) {
        setErrorInput((prev) => ({ ...prev, title: true }));
        return true;
    }
    return false;
}
