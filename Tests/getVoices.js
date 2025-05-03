async function getVoices() {
    return new Promise((resolve) => {
        const tryGetVoices = () => {
            const voices = speechSynthesis.getVoices();
            if (voices.length) {
                console.log(`%cLoaded ${voices.length} voices`, 'color: green');
                resolve(voices);
            } else if (navigator.userAgent.includes("Chrome")) {
                speechSynthesis.onvoiceschanged = () => {
                    const updatedVoices = speechSynthesis.getVoices();
                    console.log(`%cLoaded voices via voiceschanged`, 'color: orange');
                    resolve(updatedVoices);
                };
            } else {
                // Retry for Firefox
                setTimeout(() => {
                    const retryVoices = speechSynthesis.getVoices();
                    if (retryVoices.length) {
                        console.log(`%cLoaded voices after timeout`, 'color: blue');
                        resolve(retryVoices);
                    } else {
                        console.warn("Still no voices found");
                        resolve([]);
                    }
                }, 500);
            }
        };

        tryGetVoices();
    });
}
getVoices();