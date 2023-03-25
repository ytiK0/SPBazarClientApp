import React, {FC, useEffect} from 'react';
import styles from './shulkerview.css';
import {ShulkerCellView} from "../../components/ShulkerCellView";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useSearchParams} from "react-router-dom";
import {useAction} from "../../hooks/useAction";

export const ShulkerView: FC = () => {
    const {shulker, loading} = useTypedSelector(state => state.shop);
    const [search] = useSearchParams();
    const id = parseInt(search.get("id") || "0");
    const {getShulkerById} = useAction();

    useEffect(()=> {
        getShulkerById(id);
    },[])

    if (loading){
        return (
            <div className={styles.loadingSpinnerContainer}>
                <img className={styles.loadingSpinner} src={require("/static/img/loadingSpinner.gif")} alt=""/>
            </div>
        )
    }

    return (
        <div className={styles.shulkerInterface}>
          <h2 className={styles.shalkerHeading}>{shulker?.shulkerView.title}</h2>
          <div className={styles.shulkerGrid}>
            {
              shulker?.shulkerView.cells.map((cell, index) =>
                  <ShulkerCellView {...cell} key={index}/>)
            }
          </div>
        </div>
    );
}
