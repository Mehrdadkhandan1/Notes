
export const sliceText = (text) => {
    const maxLength = 110
    const truncatedText = text.length > maxLength ?
        text.slice(0, maxLength) + "..." : text;
    return truncatedText
}
