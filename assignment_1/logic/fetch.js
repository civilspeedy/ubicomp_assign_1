export function fetchJson(file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(error => console.error("JSON read err", error));
}