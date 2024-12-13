import { useForm } from "react-hook-form"

export function SearchForm({onSearch }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) =>{ 
      onSearch(data.search);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
         <div className="search-container">
  <input {...register('search')} className="searchbar" />
  <button type="submit" className="searchBtn">
    <img src="/src/assets/search-icon.png" alt="Search"  width="23px" height="23px"/>
  </button>
</div>
        </form>
    );
}

