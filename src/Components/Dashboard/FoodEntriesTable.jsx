import React from 'react';
import './FoodEntriesTable.css';

const FoodEntriesTable = () => {
    return (
        <div className="food-entries-table">
            <h3>Food entries</h3>
            <table>
                <thead>
                    <tr>
                        <th>Meal</th>
                        <th>Food</th>
                        <th>Calories</th>
                        <th>Proteins</th>
                        <th>Carbs</th>
                        <th>Fat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Meal">Breakfast</td>
                        <td data-label="Food">Porridge Oats</td>
                        <td data-label="Calories">150 kcal</td>
                        <td data-label="Proteins">12g</td>
                        <td data-label="Carbs">50g</td>
                        <td data-label="Fat">2g</td>
                    </tr>
                    <tr>
                        <td data-label="Meal">Breakfast</td>
                        <td data-label="Food">Banana whole</td>
                        <td data-label="Calories">90 kcal</td>
                        <td data-label="Proteins">2g</td>
                        <td data-label="Carbs">20g</td>
                        <td data-label="Fat">7g</td>
                    </tr>
                    <tr>
                        <td data-label="Meal">Breakfast</td>
                        <td data-label="Food">Natural honey</td>
                        <td data-label="Calories">22 kcal</td>
                        <td data-label="Proteins">1g</td>
                        <td data-label="Carbs">2g</td>
                        <td data-label="Fat">0g</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FoodEntriesTable;
