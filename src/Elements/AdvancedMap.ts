export class AdvancedMap<K,V> extends Map<K,V> {
    
    getOrDefault(key: K, defaultNumber: number): number {
        const existingValue = this.get(key);
        return existingValue !== undefined ? Number(existingValue) : defaultNumber;
    }

    setFrecuencyString(str: K[]) {
        str.forEach(element => {
            this.set(element, this.getOrDefault(element, 0) + 1 as unknown as V);
        });
    }
}