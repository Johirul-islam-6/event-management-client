import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// useApiDispatch.jsx
 export const useAppDispatch = () => {
  const dispatch = useDispatch();
  return dispatch;
};


// use api dispatch
 export const useAppSelector = (selector) => {
  const selectedState = useSelector(selector);

  return selectedState;
}; 