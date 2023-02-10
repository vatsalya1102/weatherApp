import './Form.css'

export default function Form() {
  return (
    <div className='form-div'>
        <form>
            <label>
                <input type="text" placeholder='E.g New York' />
                <a className='arrow' href="index.html"><i class="fa-solid fa-arrow-right fa-xl"></i></a>
            </label>
        </form>
    </div>
  )
}
