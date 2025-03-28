export class AdvancedMap extends Map {
    getOrDefault(key, defaultNumber) {
        const existingValue = this.get(key);
        return existingValue !== undefined ? Number(existingValue) : defaultNumber;
    }
    setFrecuencyString(str) {
        str.forEach(element => {
            this.set(element, this.getOrDefault(element, 0) + 1);
        });
    }
}
