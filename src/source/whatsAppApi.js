

export async function getAllChatIds(){
    console.log("a");
    chrome.scripting.executeScript(
        {
            files: ["script.js"],
        },
        () => {});
}
