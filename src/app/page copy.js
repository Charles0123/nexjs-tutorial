import React from 'react';

// 將扁平數據轉換為樹狀結構的函數
const buildTree = (data) => {
    const map = {};
    const roots = [];

    data.forEach(item => {
        map[item.id] = { ...item, children: [] }; // 初始化每個節點
    });

    data.forEach(item => {
        if (item.pid === 0) {
            roots.push(map[item.id]); // 根節點
        } else {
            map[item.pid].children.push(map[item.id]); // 添加子節點
        }
    });

    return roots;
};

// 遞迴組件來渲染樹狀結構
const TreeNode = ({ node }) => (
    <li style={{ width: '100px', height: '30px', border: '1px solid black', listStyleType: 'none', marginBottom: '50px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            {node.name}
        </div>
        {node.children && node.children.length > 0 && (
            <ul style={{ paddingLeft: '20px' }}>
                {node.children.map(child => (
                    <TreeNode key={child.id} node={child} />
                ))}
            </ul>
        )}
    </li>
);

export default function App() {
    const data = {
        children: [
            { id: 1, pid: 0, name: "Hospital", description: "" },
            { id: 2, pid: 1, name: "Room A", description: "" },
            { id: 3, pid: 1, name: "Room B", description: "" },
            { id: 5, pid: 2, name: "Room A-1-1", description: "" },
            { id: 6, pid: 3, name: "Room B-2-1", description: "" },
        ]
    };

    const treeData = buildTree(data.children);

    return (
        <div>
            <h1>Tree Structure</h1>
            <ul>
                {treeData.map(node => (
                    <TreeNode key={node.id} node={node} />
                ))}
            </ul>
        </div>
    );
}