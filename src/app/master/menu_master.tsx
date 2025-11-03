"use client";  
import { useEffect, useState } from "react";
import { supabase } from '@/lib/supabaseClient'
import { menuType } from "../options";
import Image from "next/image";
import left from "../../public/left_04.png";
import right from "../../public/right_04.png";
import management from "../../public/management.png";

export const MenuMaster = (props) => {
        const [data, setData] = useState<any[]>([]); // 取得したデータを保持
        const [error, setError] = useState<string | null>(null);
        const [loading, setLoading] = useState(true); // ← ロード状態を追加！
    
        useEffect(() => {
            // 非同期関数を定義
            const fetchData = async () => {
            const { data, error } = await supabase.from("m_menu_table").select("*");
        
              if (error) {
                console.error("取得エラー:", error.message);
                setError(error.message);
              } else {
                console.log("取得成功:", data);
                setData(data);
              }
              setLoading(false); // ← データ取得完了
            };
        
            fetchData();
        }, []);
    
    
        if (loading) {
            return <p>データを読み込み中...</p>;
        }
    
        if (error) {
            return <p style={{ color: "red" }}>エラー: {error}</p>;
        }
    
        if (data.length === 0) {
            return <p>データがありません。</p>;
        }
    return (
        <div>
            <div className="title">
                <h3>メニューマスタ</h3>
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
                    <ul className="pager">
                        <li><Image width={25} src={left} alt="左矢印" /></li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li><Image width={25} src={right} alt="右矢印" /></li>
                    </ul>
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>料理名称</th>
                                    <th>料理種別</th>
                                    <th>エネルギー</th>
                                </tr>
                            </thead>
                            {data.map((item) => (
                                <tr>
                                <td key={item.id}>{item.id}</td>
                                <td key={item.id}>{item.menu_name}</td>
                                <td key={item.id}>{item.menu_type}</td>
                                <td key={item.id}>{item.energy} kcal</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
    );
};

export default MenuMaster;
