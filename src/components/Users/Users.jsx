const Users = (props) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    followed: true,
                    fullName: 'Husky',
                    status: 'Hello guys!!!',
                    location: {country: 'England', city: 'London'},
                    photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nme.com%2Fwp-content%2Fuploads%2F2019%2F09%2FHusky-Loops-press-shot-1-photo-credit-Lily-Resta.jpg&tbnid=0PcZUQ3q0OMVrM&vet=12ahUKEwiY8NfF2omAAxWb_rsIHUGKDQoQMygAegUIARCzAQ..i&imgrefurl=https%3A%2F%2Fwww.nme.com%2Fblogs%2Fnme-radar%2Fwere-not-good-at-sticking-to-rules-husky-loops-want-to-capture-your-attention-in-15-seconds-or-less-2549236&docid=wpoCZh8VSPSWHM&w=2000&h=1270&q=Husky%20Loops&hl=ru&client=firefox-b-d&ved=2ahUKEwiY8NfF2omAAxWb_rsIHUGKDQoQMygAegUIARCzAQ'
                },
                {
                    id: 2,
                    followed: true,
                    fullName: 'Animal',
                    status: 'Bark-bark!!!',
                    location: {country: 'USA', city: 'Saratoga'},
                    photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5e0e4bc588cd0b6c19d0a995%2F1674079418838-FZFJLLGALM7DHN56H0DF%2F0954_111522_dg_0523-EditLORES.jpg%3Fformat%3D2500w&tbnid=E3vKulI0TqzEWM&vet=12ahUKEwj3xcm524mAAxVW7LsIHfUQD2AQMygBegUIARC1AQ..i&imgrefurl=https%3A%2F%2Fwww.alomusic.com%2F&docid=C5ZbyeypeWzEmM&w=1357&h=927&q=animal%20liberation%20orchestra&hl=ru&client=firefox-b-d&ved=2ahUKEwj3xcm524mAAxVW7LsIHfUQD2AQMygBegUIARC1AQ'
                },
                {
                    id: 3,
                    followed: false,
                    fullName: 'Cleveland',
                    status: 'yo-yo-yo',
                    location: {country: 'USA', city: 'Hitsville'},
                    photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fp16.resso.me%2Fimg%2Ftos-alisg-v-2102%2F325a9b66fde24f508a061c365ca35d67~c5_500x500.jpg&tbnid=Yytt093r7wU9FM&vet=12ahUKEwjmoeiG3ImAAxXsy7sIHZcDDYkQMygbegUIARCxAQ..i&imgrefurl=https%3A%2F%2Fwww.resso.com%2Fartist%2FSonny-Cleveland-6578118144605296648&docid=QOiG-2FM-ZlfxM&w=500&h=500&itg=1&q=Sonny%20Cleveland&hl=ru&client=firefox-b-d&ved=2ahUKEwjmoeiG3ImAAxXsy7sIHZcDDYkQMygbegUIARCxAQ'
                }
            ]
        )
    }

    let usersElement = props.usersPage.users.map(u =>
        <div key={u.id}>
            {u.fullName}
            {u.followed
                ? <button onClick={() => {
                    props.unfollow(u.id)
                }}>unfollow</button>
                : <button onClick={() => {
                    props.follow(u.id)
                }}>follow</button>
            }
        </div>)

    return (
        <div>
            {usersElement}
        </div>
    )
}

export default Users;
