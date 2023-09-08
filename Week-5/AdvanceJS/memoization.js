function memoize(func) {
    const cache = {};
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      } else {
        const result = func.apply(this, args);
        cache[key] = result;
        return result;
      }
    };
  }

function getTemperatureForCity(city){
    const temperatureData = {

        'New York': 20,
        
        'London': 18,
        
        'Paris': 22,
        
        'Tokyo': 25,
        
        'Sydney': 28,
        
        };

        for (const key in temperatureData) {
            if (key == city) {
             return temperatureData[key];
                
            }
        }
}

const memoizeGetTemperatureForCity = memoize(getTemperatureForCity);

const temperature1 = memoizeGetTemperatureForCity('New York'); console.log(temperature1); // 20

const temperature2 = memoizeGetTemperatureForCity('New York'); console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = memoizeGetTemperatureForCity('London'); console.log(temperature3); // 18

const temperature4 = memoizeGetTemperatureForCity('London'); console.log(temperature4); // 18 (retrieved from cache) 