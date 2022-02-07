import React from 'react';
import { useForm } from "react-hook-form";
import { IInstrument } from '../../../interfaces/instrument';
import Button from '../../../components/Button';
import { buttonStyle } from '../../../utils/button-style';

const Add: React.FC = () => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IInstrument>();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <main className='flex flex-col p-4 w-full md:items-center md:pr-40'>
      <form className="w-full max-w-sm" onSubmit={onSubmit}>

        {/* ANCHOR Name */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" 
              id="name" 
              type="text" 
              {...register('name')}
            />
          </div>
        </div>

        {/* ANCHOR Type */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="type">
              Type
            </label>
          </div>
          <div className="md:w-2/3">
            <select 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" 
              id="type"
              {...register('type')}
            >
              <optgroup label="Guitar">
                <option value="acoustic-guitar">Acoustic Guitar</option>
                <option value="classic-guitar">Classic Guitar</option>
                <option value="electric-guitar">Electric Guitar</option>
              </optgroup>
              <optgroup label='Keyboard & Piano'>
                <option value="electone">Electone</option>
                <option value="keyboard">Keyboard</option>
                <option value="piano">Piano</option>
              </optgroup>
              <optgroup label='Wind'>
                <option value="clarinet">Clarinet</option>
                <option value="flute">Flute</option>
                <option value="oboe">Oboe</option>
                <option value="saxophone">Saxophone</option>
                <option value="trombone">Trombone</option>
                <option value="trumpet">Trumpet</option>
              </optgroup>
              <optgroup label='Bowed String'>
                <option value="bass">Bass</option>
                <option value="cello">Cello</option>
                <option value="viola">Viola</option>
                <option value="violin">Violin</option>
              </optgroup>
              <optgroup label='Drum & Percussion'>
                <option value="drum">Drum</option>
                <option value="cajon">Cajon</option>
                <option value="chimes">Chimes</option>
              </optgroup>
            </select>
          </div>
        </div>

        {/* ANCHOR Brand  */}
        {/* TODO auto complete from db query */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="brand">
              Brand
            </label>
          </div>
          <div className="md:w-2/3">
            <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" 
              id="brand" 
              type="text" 
              {...register('brand')}
            />
          </div>
        </div>

        {/* ANCHOR Price  */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="brand">
              Price
            </label>
          </div>
          <div className="md:w-2/3">
            <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" 
              id="price" 
              type="number" 
              min={0}
              step={0.50}
              {...register('price')}
            />
          </div>
        </div>


        {/* ANCHOR Info */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="info">
              Info
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" 
              id="info"
              rows={4}
              {...register('info')}
            >
            </textarea>
          </div>
        </div>

        <Button 
          style={`${buttonStyle.orange}`}
          onClick={() => {
            // setValue("lastName", "luo"); // ✅
            // setValue("firstName", true); // ❌: true is not string
            // errors.bill; // ❌: property bill does not exist
          }}
        >
          Create
        </Button>
      </form>
    </main>
  )
}

export default Add;