"use client";  
import React, { useState } from "react";
import { menuType } from "../options";
import Image from "next/image";
import management from "../../public/management.png";

export const MenuMaster = (props) => {
    return (
        <div>
            <div className="title">
                <h3>ユーザマスタ</h3>
                <Image src={management}  className="management_button" alt="管理"/>
            </div>
                <form id="master_serch_form">
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
                                    <th>No</th>
                                    <th>アカウント名</th>
                                    <th>ユーザID</th>
                                    <th>パスワード</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>0000</td>
                                <td>ヨーグルト</td>
                                <td>デザート</td>
                                <td>30kcal</td>
                            </tr>
                            <tr>
                                <td>0000</td>
                                <td>白飯</td>
                                <td>主食</td>
                                <td>200kcal</td>
                            </tr>
                            <tr>
                                <td>0000</td>
                                <td>お茶</td>
                                <td>飲料</td>
                                <td>0kcal</td>
                            </tr>
                            <tr>
                                <td>0000</td>
                                <td>コーヒー</td>
                                <td>飲料</td>
                                <td>10kcal</td>
                            </tr>
                            <tr>
                                <td>0000</td>
                                <td>コーヒー</td>
                                <td>飲料</td>
                                <td>10kcal</td>
                            </tr>
                            <tr>
                                <td>0000</td>
                                <td>コーヒー</td>
                                <td>飲料</td>
                                <td>10kcal</td>
                            </tr>
                            <tr>
                                <td>0000</td>
                                <td>コーヒー</td>
                                <td>飲料</td>
                                <td>10kcal</td>
                            </tr>
                            <tr>
                                <td>0000</td>
                                <td>コーヒー</td>
                                <td>飲料</td>
                                <td>10kcal</td>
                            </tr>
                        </table>
                    </div>
                </div>
    );
};

export default MenuMaster;
