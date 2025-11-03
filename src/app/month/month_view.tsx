"use client";  
import { useEffect, useState } from "react";
import { supabase } from '@/lib/supabaseClient'

export const MonthView = () => {
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
    <>
      <h1>こんにちは</h1>
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
    </>
  );
};

export default MonthView;