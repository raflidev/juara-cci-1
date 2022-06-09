import './App.css';

function App() {
  const data = [
    {
      nama: "Danu Tryas Pristowo",
      link: "https://injectme.vercel.app/",
      github: "https://github.com/danutryas/INJECTme",
      figma: "https://www.figma.com/file/m8RSwB8h6MT250KEcWTulA/INJECT.me?node-id=19%3A103",
      juara: '1',
    },
    {
      nama: "Hanif Abyan Ayyasyi",
      link: "",
      github: "https://github.com/Ayyasythz/tugas-cci",
      figma: "",
      juara: '2',
    },
    {
      nama: "USTAMI RAJIB",
      link: "https://giant-friends.surge.sh",
      github: "https://github.com/ustamirazib/tugas1cci",
      figma: "https://www.figma.com/file/KOz01fFVXpa7ISmlW1bVnv/Project%2Bcci?node-id=0%3A1",
      juara: '3',
    },
    {
      nama: "Mohammad Daffa Setiawan",
      link: "https://warlock0401.github.io/Tugas-CCI/",
      github: "https://github.com/warlock0401/Tugas-CCI",
      figma: "https://www.figma.com/file/LFpqgAvDJQrvluppg4GgY8/CCI?node-id=0%3A1",
      juara: '',
    },
    {
      nama: "Ardhian Rizky Ayatollah Nur Ismail",
      link: "",
      github: "https://github.com/deruuz/Website-sederhana.git",
      figma: "",
      juara: '',
    },
    {
      nama: "Jannatin Nurrohmah",
      link: "",
      github: "https://github.com/Jannatin12/derm-health-web",
      figma: "",
      juara: '',
    },
    {
      nama: "Muhammad Zaky Fathurahim",
      link: "",
      github: "https://github.com/Zaky-ya/health-care-website.git",
      figma: "",
      juara: '',
    },
    {
      nama: "Jeremya Pascal",
      link: "",
      github: "https://github.com/Jeremyapass/CCI-Webdev-Task1.git",
      figma: "",
      juara: '',
    },
    {
      nama: "Andreas Wahyu Prayogo",
      link: "",
      github: "https://github.com/andreewp/Web-sederhana.git",
      figma: "",
      juara: '',
    },
    {
      nama: "Muhammad Rafi Ediananta",
      link: "",
      github: "https://github.com/edianantarafi/Rafi_Landing-Page-Kesehatan.git",
      figma: "https://www.figma.com/file/NcsxeATlGQdqPJSZBmj2BF/Medical-Start-page-(Community)?node-id=0%3A1",
      juara: '',
    },
    {
      nama: "Juventius Kriswijanarko",
      link: "",
      github: "https://github.com/Juventius/Tugas-1-CCI",
      figma: "",
      juara: '',
    },
    {
      nama: "Radiana De Salma",
      link: "",
      github: "https://github.com/radianade/tugas1-cci-kesehatan.git",
      figma: "https://www.figma.com/file/2uTgVCgc61yJUesO4DXBTk/CCI_1?node-id=0%3A1",
      juara: '',
    },
  ]

  const list = [];

  data.forEach(data => {
    list.push(<div className={`${data.juara === '1' ? "bg-yellow-300" : ''} ${data.juara === '2' ? "bg-gray-300" : ''} ${data.juara === '3' ? "bg-yellow-600" : ''} items-center border border-1 border-black p-4 mx-4 rounded text-black flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>
      <div className='w-5/6'>
        <h2 className="font-bold">{data.nama}</h2>
        <p className="space-x-2">
        { data.link !== "" &&
          <a className="hover:underline" href={data.link}>Website</a> 
        }
        { data.github !== "" &&
          <a className="hover:underline" href={data.github}>Github</a>
        }
        { data.figma !== "" &&
          <a className="hover:underline" href={data.figma}>Figma</a>
        } 
        </p>
      </div>
      <div className="w-1/6">
      { data.juara !== "" &&
        <p className="font-bold text-4xl">#{data.juara}</p>
      }
      </div>
    </div>)
  })

  return (
    <div>
      <div className=" h-screen text-black font-poppins">
        <div className="flex">
          <div className="w-full lg:w-2/6 m-auto bg-white h-screen pt-10">
            <h1 className="font-bold text-xl text-black text-center">🏆 Karya Terbaik 🏆</h1>
            <h1 className="font-light text-sm text-black text-center ">Tugas Webdev CCI</h1>
            <div className="grid grid-cols-1 gap-4 pt-10">
              {
                list
              }
                        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
