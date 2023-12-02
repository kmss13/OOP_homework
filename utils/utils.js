export function createElement(
    tag,
    className,
    text = "",
    attributes = {}
) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.textContent = text;
    }
    for (const key of Object.keys(attributes)) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

export const filterOptions = {
    all: "все",
    completed: "завершенные",
    active: "активные",
};

export const sortOptions = {
    default: "по умолчанию",
    content :"содержание",
    date: "дата",
}
