
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function LinkAI() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid gap-10">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">KOLLinkDrop</h1>
          <p className="text-xl md:text-2xl text-gray-600">
            连接品牌与全球红人，AI驱动的红人推荐平台
          </p>
          <a
            href="https://docs.qq.com/sheet/DWkFkc3hQU0taeU5N?tab=BB08J2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-lg px-6 py-4 rounded-2xl shadow-md">
              获取100位红人推荐包
            </Button>
          </a>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "红人数据库",
              content: "筛选20万+红人，涵盖时尚、美妆、健身等主流垂类。",
            },
            {
              title: "AI智能匹配",
              content: "基于关键词、品类、国家推荐最优合作红人。",
            },
            {
              title: "一键抓取数据",
              content: "自动获取粉丝量、互动率、内容类型等核心数据。",
            },
            {
              title: "DM模板工具",
              content: "集成20+套沟通模板，提高开口回复率。",
            },
            {
              title: "合作仪表盘",
              content: "记录、跟踪、分析合作效果，自动输出周报。",
            },
            {
              title: "私域引流工具",
              content: "一键生成微信/WhatsApp拉群页，沉淀红人资源。",
            },
          ].map(({ title, content }, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{content}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-semibold">红人样本 Demo</h2>
          <p className="text-gray-600">以下为 KOLLinkDrop 实际收录的部分红人信息</p>
          <div className="overflow-x-auto border rounded-2xl">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">用户名</th>
                  <th className="px-4 py-2">粉丝数</th>
                  <th className="px-4 py-2">国家</th>
                  <th className="px-4 py-2">垂类</th>
                  <th className="px-4 py-2">合作方式</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["@heidipierpont", "27.4K", "USA", "时尚穿搭", "置换内容"],
                  ["@hayley__carter", "36.1K", "USA", "健身生活", "内容+佣金"],
                  ["@iamlonni", "91.2K", "USA", "美妆/穿搭", "送样+佣金"],
                  ["@lucianavirasoro", "30.2K", "USA", "香氛生活", "纯置换"],
                  ["@fit_withdora", "28.1K", "USA", "健身/减脂", "内容合作"],
                  ["@juliasartini1", "42.6K", "USA", "内衣穿搭", "送样+佣金"],
                  ["@itsgoldenpiecee", "21.9K", "USA", "日常穿搭", "置换+返图"],
                  ["@madison.johnsonn", "53.8K", "USA", "生活方式", "送样合作"]
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2 whitespace-nowrap">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-center space-y-4 mt-20">
          <h2 className="text-2xl font-semibold">提前获取上线通知</h2>
          <div className="flex justify-center gap-2">
            <Input
              placeholder="输入你的邮箱"
              className="max-w-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button>提交</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
