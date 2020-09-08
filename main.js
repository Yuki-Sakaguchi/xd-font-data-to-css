const { Text } = require("scenegraph")
const { alert, error } = require("./lib/dialogs.js");
const clipboard = require("clipboard")

/**
 * Textオブジェクトからフォントのデータを取得
 * @param {*} item 
 */
function getFontStyle (item) {
    return `
        font-style: ${item.fontFamily};
        font-weight: ${item.fontStyle};
        font-size: ${item.fontSize}px;
        color: #${item.fill.value.toString(16).slice(2)};
        letter-spacing: ${item.charSpacing / 1000}em;
        line-height: ${item.lineSpacing / item.fontSize};
    ` 
}

/**
 * フォントのデータを全て取得
 * @param {*} selection 
 * @param {*} documentRoot 
 */
function getFontDataAll (selection, documentRoot) {
    try {
        for (let i = 0; i < selection.items.length; i++) {
            let item = selection.items[i]
            if (item instanceof Text) {
                const results = getFontStyle(item)
                console.log(item.styleRanges)
                console.log(results)
                clipboard.copyText(results)
                alert('Convert font data to CSS', 'Successfully copied all font style!')
            } else {
                error('Convert font data to CSS', 'Copy failed! Please select text.')
            }
        }
    } catch (e) {
        error('Convert font data to CSS', 'An error has occured', e)
    }
}

/**
 * フォントのletter-spacingを計算して取得
 * @param {*} selection 
 * @param {*} documentRoot 
 */
function getCharSpacing (selection, documentRoot) {
    try {
        for (let i = 0; i < selection.items.length; i++) {
            let item = selection.items[i]
            if (item instanceof Text) {
                const result = item.charSpacing / 1000
                const resultText = `letter-spacing: ${result}em;`
                console.log(resultText)
                clipboard.copyText(resultText)
                alert('Convert font data to CSS', 'Successfully copied letter-spacing!')
            } else {
                error('Convert font data to CSS', 'Copy failed! Please select text.')
            }
        }
    } catch (e) {
        error('Convert font data to CSS', 'An error has occured', e)
    }
}

/**
 * フォントのline-heightを計算して取得
 * @param {*} selection 
 * @param {*} documentRoot 
 */
function getLineHeight (selection, documentRoot) {
    try {
        for (let i = 0; i < selection.items.length; i++) {
            let item = selection.items[i]
            if (item instanceof Text) {
                const result = item.lineSpacing / item.fontSize;
                const resultText = `line-height: ${result};`
                console.log(resultText)
                clipboard.copyText(resultText)
                alert('Convert font data to CSS', 'Successfully copied line-height!')
            } else {
                error('Convert font data to CSS', 'Copy failed! Please select text.')
            }
        }
    } catch (e) {
        error('Convert font data to CSS', 'An error has occured', e)
    }
}

module.exports = {
    commands: {
        getFontDataAll: getFontDataAll,
        getCharSpacing: getCharSpacing,
        getLineHeight: getLineHeight
    }
}