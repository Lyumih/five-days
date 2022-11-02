export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">5 дней</h1>
      <div>
        <div>1 - 3 день - работа</div>
        <div>4 день - исследования / отдых</div>
        <div>5 день - тех. задачи</div>
      </div>
      <div>
        <div>Сегодня - {new Date().getDay() + 1}</div>
      </div>
    </div>
  )
}
