import React from 'react';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import './App.css';
import loamini from './img/loamini.jpg'
import phim from './img/phim.jpeg'
import lotchuot from './img/lotchuot.jpg'
import { dataCard, dataCase, dataLai, dataMainchip, dataManhinh, dataPow, dataRam, dataSsd, dataTan } from './Data'

interface Computer {
  mainchip: string | undefined;
  ram: string | undefined;
  ssd: string | undefined;
  card: string | undefined;
  pow: string | undefined;
  case: string | undefined;
  manhinh: string | undefined;
  lai: string | undefined;
  tan: string | undefined;

}

function App() {
  const optionTime = [
    { values: '30p', label: '30p' },
    { values: '60p', label: '60p' },
    { values: '90p', label: '90p' },
    { values: '120p', label: '120p' }

  ]
  const [price, setPrice] = useState(0)
  const [img, setImg] = useState()
  const [priceold, setPriceOld] = useState(0)
  const [computer, setComputer] = useState<Computer>({
    mainchip: 'H61 - i5 2400',
    ram: '8 Gb Buss 1600',
    ssd: '120GB',
    card: '650Ti',
    pow: '400w',
    case: 'Rainbow Đen + Fan Led',
    manhinh: 'Vsp 22 inch Full Vien 75hz',
    lai: '1400',
    tan: 'Tản Khí AM 6100'

  })
  useEffect(() => {
    let priceMainchip: any = dataMainchip.find((value, index) => {
      return value.values === computer.mainchip
    })
    let priceRam: any = dataRam.find((value, index) => {
      return value.values === computer.ram
    })
    let priceCard: any = dataCard.find((value, index) => {
      return value.values === computer.card
    })
    let priceSsd: any = dataSsd.find((value, index) => {
      return value.values === computer.ssd
    })
    let priceManhinh: any = dataManhinh.find((value, index) => {
      return value.values === computer.manhinh
    })
    let priceCase: any = dataCase.find((value, index) => {
      return value.values === computer.case
    })
    let pricePow: any = dataPow.find((value, index) => {
      return value.values === computer.pow
    })
    let priceTan: any = dataTan.find((value, index) => {
      return value.values === computer.tan
    })
    let priceLai: any = dataLai.find((value, index) => {
      return value.values === computer.lai
    })
    setPriceOld(175 + 50 + 250 + priceTan?.price + priceMainchip?.price + priceRam?.price + priceCard?.price + priceSsd?.price + priceManhinh?.price + pricePow?.price + priceCase?.price)
    setPrice(priceold + priceLai?.price)
    setImg(priceCase.img)
  })
  return (
    <div className="App">
      <div className='header'>
        <button className='btn-set' onClick={() => setComputer({
          mainchip: 'H61 - i5 2400',
          ram: '8 Gb Buss 1600',
          ssd: '120GB',
          card: '650Ti',
          pow: '400w',
          case: 'Rainbow Đen + Fan Led',
          manhinh: 'Vsp 22 inch Full Vien 75hz',
          lai: '1400',
          tan: 'Tản Khí AM 6100'
        })}>6000</button>

        <button className='btn-set' onClick={() => setComputer({
          mainchip: 'H81 - i5 4570',
          ram: '8 Gb Buss 1600',
          ssd: '256GB',
          card: '750Ti',
          pow: '400w',
          case: 'Rainbow Đen + Fan Led',
          manhinh: 'Vsp 22 inch Full Vien 75hz',
          lai : '1400',
          tan : 'Tản Khí AM 6100'
        })}>Valorant - 6tr4</button>
        
        <button className='btn-set' onClick={() => setComputer({
          mainchip: 'H81 - i5 4570',
          ram: '8 Gb Buss 1600',
          ssd: '256GB',
          card: '960 4Gb',
          pow: '400w',
          case: 'Rainbow Đen + Fan Led',
          manhinh: 'Vsp 22 inch Full Vien 75hz',
          lai : '1400',
          tan : 'Tản Khí AM 6100'
        })}>Genshin - 6tr7</button>

        <button className='btn-set' onClick={() => setComputer({
          mainchip: 'H81 - Intel  Xeon 1220v3',
          ram: '8 Gb Buss 1600',
          ssd: '120GB',
          card: '750Ti',
          pow: '400w',
          case: 'Rainbow Đen + Fan Led',
          manhinh: 'Vsp 22 inch Full Vien 75hz',
          lai: '1400',
          tan: 'Tản Khí AM 6100'
        })}>Xeon - 7tr</button>
        <button className='btn-set' onClick={() => setComputer({
          mainchip: 'H110 - i5 6500',
          ram: '16 Gb Buss 1600',
          ssd: '256GB',
          card: '1060 3Gb',
          pow: '400w',
          case: 'Rainbow Đen + Fan Led',
          manhinh: 'Vsp 22 inch Full Vien 75hz',
          lai : '1400',
          tan : 'Tản Khí AM 6100'
        })}>GTA - 7tr8</button>
        <button className='btn-set' onClick={() => setComputer({
           mainchip: 'H310 - i3 9100',
           ram: '16 Gb Buss 1600',
           ssd: '256GB',
           card: '1060 3Gb',
           pow: '400w',
           case: 'Rainbow Đen + Fan Led',
           manhinh: 'Vsp 22 inch Full Vien 75hz',
           lai : '1400',
           tan : 'Tản Khí AM 6100'
        })}>Pubg - 8tr4</button>

        <button className='btn-set' onClick={() => setComputer({
          mainchip: 'H510 - i3 10100',
          ram: '16 Gb Buss 2666',
          ssd: '256GB',
          card: '1060 3Gb',
          pow: '400w',
          case: 'Rainbow Đen + Fan Led',
          manhinh: 'Vsp 22 inch Full Vien 75hz',
          lai: '1400',
          tan: 'Tản Khí AM 6100'
        })}>10000</button>


        <button className='btn-set' onClick={() => setComputer({
          mainchip: 'B660 - i5 12400',
          ram: '16 Gb Buss 3200',
          ssd: '512GB',
          card: '2060',
          pow: '550w',
          case: 'Rainbow Đen + Fan Led',
          manhinh: 'Vsp 27 inch Full Vien 75hz',
          lai: '1400',
          tan: 'Tản Khí AM 6100'
        })}>16200</button>
        

        
      </div>
      <div className='myapp'>
        <div className='build'>
          <div className='div_1'>
            <Select
              className='input_div_12'
              options={dataMainchip}
              value={{ values: computer.mainchip, label: computer.mainchip }}
              onChange={e => setComputer({
                ...computer,
                mainchip: e?.values
              })}
            />
          </div>
          <div className='div_1'>
            <Select
              className='input_div_12'
              options={dataRam}
              value={{ values: computer.ram, label: computer.ram }}
              onChange={e => setComputer({
                ...computer,
                ram: e?.values
              })}
            />
          </div>
          <div className='div_1'>
            <Select
              className='input_div_12'
              options={dataSsd}
              value={{ values: computer.ssd, label: computer.ssd }}
              onChange={e => setComputer({
                ...computer,
                ssd: e?.values
              })}
            />
          </div>
          <div className='div_1'>
            <Select
              className='input_div_12'
              options={dataCard}
              value={{ values: computer.card, label: computer.card }}
              onChange={e => setComputer({
                ...computer,
                card: e?.values
              })}
            />
          </div>
          <div className='div_1'>
            <Select
              className='input_div_12'
              options={dataPow}
              value={{ values: computer.pow, label: computer.pow }}
              onChange={e => setComputer({
                ...computer,
                pow: e?.values
              })}
            />
          </div>
          <div className='div_1'>
            <Select
              className='input_div_12'
              options={dataCase}
              value={{ values: computer.case, label: computer.case }}
              onChange={e => setComputer({
                ...computer,
                case: e?.values
              })}
            />
          </div>
          <div className='div_1'>
            <Select
              className='input_div_12'
              options={dataManhinh}
              value={{ values: computer.manhinh, label: computer.manhinh }}
              onChange={e => setComputer({
                ...computer,
                manhinh: e?.values
              })}
            />
          </div>
          <div className='div_1'>
            <Select
              className='input_div_12'
              options={dataTan}
              value={{ values: computer.tan, label: computer.tan }}
              onChange={e => setComputer({
                ...computer,
                tan: e?.values
              })}
            />
          </div>

        </div>
        <div className='showout'>
          <div className='showimg'>
            <div className='showimg0' > <img style={{ width: '100% ', height: 'auto' }} src={img} /></div>
            <div className='showimg1' > <img style={{ width: '100% ', height: 'auto' }} src={loamini} /></div>
            <div className='showimg1' > <img style={{ width: '100% ', height: '140%', transform: 'rotate(270deg)' }} src={phim} /></div>
            <div className='showimg1' > <img style={{ width: '90% ', height: 'auto' }} src={lotchuot} /></div>
            <p className='giakhach'> Giá : {(price - price % 1000) / 1000}.{price % 1000}.000</p>
          </div>
          <div className='showcase'>
            <p className='showP'>{computer.mainchip}</p>
            <p className='showP'>Ram {computer.ram}</p>
            <p className='showP'>Ổ Cứng Ssd {computer.ssd}</p>
            <p className='showP'>Card Gtx {computer.card}</p>
            <p className='showP'>Nguồn {computer.pow}</p>
            <p className='showP'> Vỏ {computer.case}</p>
            <p className='showP'>Màn hình {computer.manhinh}</p>
            <p className='showPcolor'>Tặng kèm Phím Chuột, Lót Chuột, Loa Mini, Dây Mạng, ...</p>
            <p className='showPcolorBlue'>Sdt/Zalo : 0387 475 071 - Duy Pc Gaming</p>


          </div>

        </div>
      </div>


      <p className='tinhgiagoc'> Giá không lãi : {priceold}</p>\
      <div className='div_1'>
        <Select
          className='input_div_12lai'
          options={dataLai}
          value={{ values: computer.lai, label: computer.lai }}
          onChange={e => setComputer({
            ...computer,
            lai: e?.values
          })}
        />
      </div>
      {/* <button className='btn-tinh' onClick={handleClick}>TINH </button> */}
    </div>
  );
}

export default App;








