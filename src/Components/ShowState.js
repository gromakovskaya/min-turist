import React from "react";
import Items from "./Items";
import ShowFullItem from "./ShowFullItem";
class ShowState extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items:[
                {
                    id:1,
                    title:'Памятник Салавату Юлаеву',
                    img:'salavat.jpg',
                    arc:'Скульптор: Сосланбек Тавасиев, годы строительства: 1963-1967',
                    desc:'Памятник представляет собой скульптуру Салавата Юлаева на коне. На запястье правой руки героя — плеть с петлей на конце рукоятки, на левом боку — сабля. Статуя выполнена из бронзированного чугуна. Постамент железобетонный, облицованный гранитными плитами. Территория вокруг памятника выложена цветными плитами и благоустроена. Площадка огорожена ажурной металлической решеткой.'

                },
                {
                    id:2,
                    title:'Мечеть Ляля Тюльпан',
                    img:'lala.jpg',
                    arc:'Архитектор: Вакиль Давлятшин, годы строительства: 1989-1998',
                    desc:'В основу проекта был положен символ приходящей весны, цветущего тюльпана (который издревле был символом тюркских народов), а минареты олицетворяют два его бутона.'
                },
                {
                    id:3,
                    title:'Фонтан "Семь девушек"',
                    img:'fontain.jpg',
                    arc:'Скульптор: Ханиф Хабибрахманов, годы открытия: 2015',
                    desc:'Фонтан «Семь девушек», одна из главных достопримечательностей Уфы, был открыт летом 2015 года в реконструированном Театральном сквере, основном прогулочном месте центра города. Это самое большое сооружение подобного типа в Республике Башкортостан. Включает в себя 2 чаши, облицованные гранитом и скульптуры девушек, возвышающиеся на постаментах.'
                },
                {
                    id:4,
                    title:'Советская площаль',
                    img:'soviet.jpg',
                    arc:'Скульптор: Салават Щербаков, годы открытия: 2022',
                    desc:'После реконструкции, завершившейся в октябре 2022 года, площадь в историческом центре Уфы стала одной из главных достопримечательностей города. В центре площади возвышается памятник Герою России, командующему 112-й Башкирской кавалерийской дивизией, генерал-майору Минигали Шаймуратову и всем воинам Башкортостана, защищавшим Отечество. Высота самого всадника от постамента до макушки составляет 6,5 метра, а вместе с постаментом уже 13,5 метра..'
                },
                {
                    id:5,
                    title:'Монумент Дружбы',
                    img:'monument.jpg',
                    arc:'Скульпторы: Михаил Бабурин и Галина Левицкая, годы строительства: 1960-1965',
                    desc:'Монумент в честь 400-летия присоединения (вхождения) исторического Башкортостана в состав Русского государства, на Первомайской площади в городе Уфе. Установлен в историческом центре города — Старой Уфе — на Троицком холме, где ранее находились Уфимский кремль и уничтоженная Троицкая церковь.'
                },
                {
                    id:6,
                    title:'Самолёт УУНИТ',
                    img:'airplane.jpg',
                    arc:'Самолёт МиГ-19 - символ бывшего УГАТУ. «Штурмующим, дерзающим, творящим», - высечено на его постаменте. И эти слова стали девизом для нескольких поколений студентов.Здесь проходят самые главные мероприятия вуза: торжественная линейка для первокурсников, вручение дипломов выпускникам, военно-спортивная эстафета в честь Дня Победы, студенческие флэшмобы и праздники. А еще здесь молодые люди назначают свидания и обязательно приходят сюда в день свадьбы.',
                    desc:'Самолёт МиГ-19 - символ бывшего УГАТУ.'
                },

            ],
            showFullItem:false,
            fullItem:{}          
        }
        this.onShowItem = this.onShowItem.bind(this)
    }
    render(){
        
        return(
            
            <div className="wrapper">
                <Items onShowItem={this.onShowItem} items={this.state.items} />
                {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} />}
            </div>
            
        )
    }
    onShowItem(item){
        this.setState({ fullItem: item })
        this.setState({ showFullItem: !this.state.showFullItem })
    }
    
}
export default ShowState;