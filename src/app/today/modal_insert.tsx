"use client";  
import React, { useState } from "react";
import { menuType } from "../options";
import { useRouter } from "next/navigation";

type ModalInsertProps = {
    showFlag: boolean;
    setShowModal: (value: boolean) => void;
  };

export const ModalInsurt: React.FC<ModalInsertProps> = ({ showFlag, setShowModal }) => {
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <>
        {showFlag ? ( 
           <div id="overlay">
                <div id="modalContent">
                    <h3>料理検索</h3>
                    <form id="menu_serch_form">
                        <div>
                            <label className="menu_name">料理名称</label>
                            <input type="search"></input>
                        </div>
                        <div className="menu_type">
                            <label>料理種別</label>
                            <select>
                                <option value="" disabled>-- 選択してください --</option>
                                {menuType.map(menu => (
                                    <option key={menu.value} value={menu.value}>
                                        {menu.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input_en">
                            <label>エネルギー</label>
                            <input type="search"></input>
                            <p>〜</p>
                            <input type="search"></input>
                        </div>
                        <div className="search">
                            <div className="radio-group"> 
                                <input type="radio" value="and" name="serch_type"/>
                                <label>AND検索</label>
                                <input type="radio" value="or" name="serch_type"/>
                                <label>OR検索</label>
                            </div>
                            <div className="button-group"> 
                                <button type="submit" className="ok">検索</button>
                                <button type="submit" className="cancel">クリア</button>
                            </div>
                        </div>
                    </form>
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>選択</th>
                                    <th>ID</th>
                                    <th>料理名称</th>
                                    <th>料理種別</th>
                                    <th>エネルギー</th>
                                </tr>
                            </thead>
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>0000</td>
                                <td>ヨーグルト</td>
                                <td>デザート</td>
                                <td>30kcal</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>0000</td>
                                <td>白飯</td>
                                <td>主食</td>
                                <td>200kcal</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>0000</td>
                                <td>お茶</td>
                                <td>飲料</td>
                                <td>0kcal</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>0000</td>
                                <td>コーヒー</td>
                                <td>飲料</td>
                                <td>10kcal</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>0000</td>
                                <td>コーヒー</td>
                                <td>飲料</td>
                                <td>10kcal</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>0000</td>
                                <td>コーヒー</td>
                                <td>飲料</td>
                                <td>10kcal</td>
                            </tr>
                        </table>
                    </div>
                    <div className="insert">
                        <div className="button-group">            
                            <button className="ok">追加</button>
                            <button className="cancel" onClick={closeModal}>戻る</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
        <></>
        )}
        </>
    );
};

export default ModalInsurt;
