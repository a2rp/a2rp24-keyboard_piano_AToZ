import { useEffect, useRef, useState } from 'react';
import './App.css';
import styles from "./styles.module.scss";

import { AiFillWindows } from "react-icons/ai";
import noteA from "./mp3/keyA.mp3";
import noteB from "./mp3/keyB.mp3";
import noteC from "./mp3/keyC.mp3";
import noteD from "./mp3/keyD.mp3";
import noteE from "./mp3/keyE.mp3";
import noteF from "./mp3/keyF.mp3";
import noteG from "./mp3/keyG.mp3";
import noteH from "./mp3/keyH.mp3";
import noteI from "./mp3/keyI.mp3";
import noteJ from "./mp3/keyJ.mp3";
import noteK from "./mp3/keyK.mp3";
import noteL from "./mp3/keyL.mp3";
import noteM from "./mp3/keyM.mp3";
import noteN from "./mp3/keyN.mp3";
import noteO from "./mp3/keyO.mp3";
import noteP from "./mp3/keyP.mp3";
import noteQ from "./mp3/keyQ.mp3";
import noteR from "./mp3/keyR.mp3";
import noteS from "./mp3/keyS.mp3";
import noteT from "./mp3/keyT.mp3";
import noteU from "./mp3/keyU.mp3";
import noteV from "./mp3/keyV.mp3";
import noteW from "./mp3/keyW.mp3";
import noteX from "./mp3/keyX.mp3";
import noteY from "./mp3/keyA.mp3";
import noteZ from "./mp3/keyB.mp3";

function App() {
    let noteAudio = useRef(null);

    useEffect(() => {
        const allKeys = document.querySelectorAll(".audioKey");
        allKeys.forEach(key => {
            key.addEventListener("click", () => {
                const getKeyValue = key.className.split(" ")[key.className.split(" ").length - 1];
                noteAudio = document.getElementById(getKeyValue);

                noteAudio.currentTime = 0;
                noteAudio.addEventListener("ended", () => {
                    // console.log("ended");
                    document.querySelector("." + getKeyValue).style.cssText = `
                        box-shadow: 0 0 5px #000;
                    `;
                });
                noteAudio.play();

                const noteText = document.querySelector(".textContainer").innerText;
                const newText = noteText + " " + getKeyValue;
                document.querySelector(".textContainer").innerText = newText;

                setPressedKey(getKeyValue.toUpperCase());
            });
        });

        const charList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        document.addEventListener("keydown", event => {
            if (event.repeat) {
                return;
            }
            const keyValue = event.key;
            const codeValue = event.code;
            if (!charList.includes(keyValue.toLowerCase())) {
                return;
            }
            noteAudio = document.getElementById(keyValue.toUpperCase());
            noteAudio.currentTime = 0;
            noteAudio.play();
            document.querySelector("." + keyValue.toUpperCase()).style.cssText = `
                box-shadow: 0 0 5px #aaa;
            `;
            noteAudio.addEventListener("ended", () => {
                // console.log("ended");
                document.querySelector("." + keyValue.toUpperCase()).style.cssText = `
                    box-shadow: 0 0 5px #000;
                `;
            });

            const noteText = document.querySelector(".textContainer").innerText;
            const newText = noteText + " " + keyValue.toUpperCase();
            document.querySelector(".textContainer").innerText = newText;

            setPressedKey(keyValue.toUpperCase());
        });
    }, []);

    const [pressedKey, setPressedKey] = useState("");
    useEffect(() => {
        console.log(pressedKey);
        if (pressedKey.length > 0) {
            document.querySelectorAll(".audioKey").forEach(key => {
                // console.log(key.getAttribute("data-note"));
                key.style.cssText = `
                    box-shadow: 0 0 5px #000;
                `;
            });
            document.querySelector("." + pressedKey).style.cssText = `
                box-shadow: 0 0 5px #aaa;
            `;
        }
    }, [pressedKey]);

    return (
        <div className={`${styles.App}`}>
            <div className={styles.appName}>a2rp: Keyboard Piano [A-Z]</div>

            <audio id="A" src={noteA}></audio>
            <audio id="B" src={noteB}></audio>
            <audio id="C" src={noteC}></audio>
            <audio id="D" src={noteD}></audio>
            <audio id="E" src={noteE}></audio>
            <audio id="F" src={noteF}></audio>
            <audio id="G" src={noteG}></audio>
            <audio id="H" src={noteH}></audio>
            <audio id="I" src={noteI}></audio>
            <audio id="J" src={noteJ}></audio>
            <audio id="K" src={noteK}></audio>
            <audio id="L" src={noteL}></audio>
            <audio id="M" src={noteM}></audio>
            <audio id="N" src={noteN}></audio>
            <audio id="O" src={noteO}></audio>
            <audio id="P" src={noteP}></audio>
            <audio id="Q" src={noteQ}></audio>
            <audio id="R" src={noteR}></audio>
            <audio id="S" src={noteS}></audio>
            <audio id="T" src={noteT}></audio>
            <audio id="U" src={noteU}></audio>
            <audio id="V" src={noteV}></audio>
            <audio id="W" src={noteW}></audio>
            <audio id="X" src={noteX}></audio>
            <audio id="Y" src={noteY}></audio>
            <audio id="Z" src={noteZ}></audio>

            <div className={styles.keyboardTextContainer}>
                <div className={`${styles.textContainer} textContainer`}></div>
                <div className={`${styles.keysContainer} ${styles.noselect}`}>
                    <div className={`${styles.firstRow}`}>
                        <div className={`${styles.key} ${styles.keyBackTick}`}>`</div>
                        <div className={`${styles.key} ${styles.key1}`}>1</div>
                        <div className={`${styles.key} ${styles.key2}`}>2</div>
                        <div className={`${styles.key} ${styles.key3}`}>3</div>
                        <div className={`${styles.key} ${styles.key4}`}>4</div>
                        <div className={`${styles.key} ${styles.key5}`}>5</div>
                        <div className={`${styles.key} ${styles.key6}`}>6</div>
                        <div className={`${styles.key} ${styles.key7}`}>7</div>
                        <div className={`${styles.key} ${styles.key8}`}>8</div>
                        <div className={`${styles.key} ${styles.key9}`}>9</div>
                        <div className={`${styles.key} ${styles.key0}`}>0</div>
                        <div className={`${styles.key} ${styles.keyMinus}`}>-</div>
                        <div className={`${styles.key} ${styles.keyEqualTo}`}>=</div>
                        <div className={`${styles.key} ${styles.keyBackSpace}`}>backspace</div>
                    </div>

                    <div className={styles.secondRow}>
                        <div className={`${styles.key} ${styles.keyTab}`}>tab</div>
                        <div data-note="Q" className={`${styles.key} ${styles.keyQ} audioKey Q`}>Q</div>
                        <div data-note="W" className={`${styles.key} ${styles.keyW} audioKey W`}>W</div>
                        <div data-note="E" className={`${styles.key} ${styles.keyE} audioKey E`}>E</div>
                        <div data-note="R" className={`${styles.key} ${styles.keyR} audioKey R`}>R</div>
                        <div data-note="T" className={`${styles.key} ${styles.keyT} audioKey T`}>T</div>
                        <div data-note="Y" className={`${styles.key} ${styles.keyY} audioKey Y`}>Y</div>
                        <div data-note="U" className={`${styles.key} ${styles.keyU} audioKey U`}>U</div>
                        <div data-note="I" className={`${styles.key} ${styles.keyI} audioKey I`}>I</div>
                        <div data-note="O" className={`${styles.key} ${styles.keyO} audioKey O`}>O</div>
                        <div data-note="P" className={`${styles.key} ${styles.keyP} audioKey P`}>P</div>
                        <div className={`${styles.key} ${styles.keyLeftSquareBracket}`}>[</div>
                        <div className={`${styles.key} ${styles.keyRightSquareBracket}`}>]</div>
                        <div className={`${styles.key} ${styles.keyBackSlash}`}>\</div>
                    </div>

                    <div className={styles.thirdRow}>
                        <div className={`${styles.key} ${styles.keyCapsLock}`}>caps lock</div>
                        <div data-note="A" className={`${styles.key} ${styles.keyA} audioKey A`}>A</div>
                        <div data-note="S" className={`${styles.key} ${styles.keyS} audioKey S`}>S</div>
                        <div data-note="D" className={`${styles.key} ${styles.keyD} audioKey D`}>D</div>
                        <div data-note="F" className={`${styles.key} ${styles.keyF} audioKey F`}>F</div>
                        <div data-note="G" className={`${styles.key} ${styles.keyG} audioKey G`}>G</div>
                        <div data-note="H" className={`${styles.key} ${styles.keyH} audioKey H`}>H</div>
                        <div data-note="J" className={`${styles.key} ${styles.keyJ} audioKey J`}>J</div>
                        <div data-note="K" className={`${styles.key} ${styles.keyK} audioKey K`}>K</div>
                        <div data-note="L" className={`${styles.key} ${styles.keyL} audioKey L`}>L</div>
                        <div className={`${styles.key} ${styles.keySemiColon}`}>;</div>
                        <div className={`${styles.key} ${styles.keySingleSemiColon}`}>'</div>
                        <div className={`${styles.key} ${styles.keyEnter}`}>enter</div>
                    </div>

                    <div className={styles.fourthRow}>
                        <div className={`${styles.key} ${styles.keyLeftShift}`}>Shift</div>
                        <div data-note="Z" className={`${styles.key} ${styles.keyZ} audioKey Z`}>Z</div>
                        <div data-note="X" className={`${styles.key} ${styles.keyX} audioKey X`}>X</div>
                        <div data-note="C" className={`${styles.key} ${styles.keyC} audioKey C`}>C</div>
                        <div data-note="V" className={`${styles.key} ${styles.keyV} audioKey V`}>V</div>
                        <div data-note="B" className={`${styles.key} ${styles.keyB} audioKey B`}>B</div>
                        <div data-note="N" className={`${styles.key} ${styles.keyN} audioKey N`}>N</div>
                        <div data-note="M" className={`${styles.key} ${styles.keyM} audioKey M`}>M</div>
                        <div className={`${styles.key} ${styles.keyComma}`}>,</div>
                        <div className={`${styles.key} ${styles.keyDot}`}>.</div>
                        <div className={`${styles.key} ${styles.keyForwardSlash}`}>/</div>
                        <div className={`${styles.key} ${styles.keyRightShift}`}>Shift</div>
                    </div>

                    <div className={styles.fifthRow}>
                        <div className={`${styles.key} ${styles.keyLeftCtrl}`}>Shift</div>
                        <div className={`${styles.key} ${styles.keyFunction}`}>fn</div>
                        <div className={`${styles.key} ${styles.keyWindow}`}><AiFillWindows /></div>
                        <div className={`${styles.key} ${styles.keyLeftAlt}`}>alt</div>
                        <div className={`${styles.key} ${styles.keySpaceBar}`}></div>
                        <div className={`${styles.key} ${styles.keyRightAlt}`}>alt</div>
                        <div className={`${styles.key} ${styles.keyRightCtrl}`}>ctrl</div>
                        <div className={`${styles.key} ${styles.keyLeftArrow}`}>&lt;</div>
                        <div className={`${styles.key} ${styles.keyUpDownArrow}`}>
                            <div className={`${styles.arrowKey} ${styles.upArrow}`}>&#8963;</div>
                            <div className={`${styles.arrowKey} ${styles.downArrow}`}>&#8964;</div>
                        </div>
                        <div className={`${styles.key} ${styles.keyRightArrow}`}>&gt;</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
