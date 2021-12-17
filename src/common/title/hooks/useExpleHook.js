const useHook = () => { 
    const [data, setData] = useState({
        loading: false,
        error: '',
        data: {}
    })
 
    useEffect(async () => {
        try {
            const data = await fetch('http://api.com')
            setData(prevState => ({...prevState, data:data, loading:false}));
            
        } catch (error) {
            
        }
    }, []);

    return {data}; 
}
export default useHook;