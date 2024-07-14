export default function WritePage(){
    return (
        <div className="flex flex-col items-center p-24">
            <main className="flex flex-col items-center gap-12 max-w-[50rem] w-[80vw] border rounded shadow-md p-12">
                <h1 className="text-3xl font-bold">게시물 등록</h1>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <fieldset className="flex flex-col items-start gap-4">
                        <label>작성자</label>
                        <input className="w-full text-black border border-gray-400" />
                    </fieldset>
                    <fieldset className="flex flex-col items-start gap-4">
                        <label>비밀번호</label>
                        <input className="w-full text-black border border-gray-400" />
                    </fieldset>
                    <fieldset className="sm:col-span-2 flex flex-col items-start gap-4">
                        <label>제목</label>
                        <input className="w-full text-black border border-gray-400" />
                    </fieldset>
                    <fieldset className="sm:col-span-2 row-span-8 flex flex-col items-start gap-4">
                        <label>내용</label>
                        <input className="w-full text-black grow border border-gray-400" />
                    </fieldset>
                    <fieldset className="sm:col-span-2 flex flex-col items-start gap-4">
                        <label>주소</label>
                        <div className="flex gap-6">
                            <input className="w-16 text-black border border-gray-400" />
                            <button className="border rounded-md px-2 py-1">우편번호 검색</button>
                        </div>
                        <input className="w-full text-black border border-gray-400" />
                        <input className="w-full text-black border border-gray-400" />
                    </fieldset>
                    <fieldset className="sm:col-span-2 flex flex-col items-start gap-4">
                        <label>유튜브</label>
                        <input className="w-full text-black border border-gray-400"></input>
                    </fieldset>
                    <fieldset className="sm:col-span-2 flex flex-col items-start gap-4 w-full min-w-0">
                        <label>사진 첨부</label>
                        <div className="flex gap-5 overflow-scroll w-full">
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                            <div className="w-20 h-20 min-w-20 min-h-20 bg-slate-50"></div>
                        </div>
                    </fieldset>
                    <fieldset className="sm:col-span-2 flex flex-col items-start gap-2">
                        <label>메인 설정</label>
                        <div className="flex gap-3">
                            <div className="flex gap-2">
                                <input id="main_option_youtube" type="radio" name="main_option"></input>
                                <label for="main_option_youtube">유튜브</label>
                            </div>
                            <div className="flex gap-2">
                                <input id="main_option_photo" type="radio" name="main_option"></input>
                                <label for="main_option_photo">사진</label>
                            </div>
                        </div>
                    </fieldset>
                    <div className="sm:col-span-2 flex justify-center py-4">
                        <button className="bg-yellow-400 px-10 py-2 text-black">등록하기</button>
                    </div>
                </form>
            </main>
        </div>
    )
}