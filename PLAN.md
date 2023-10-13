# Ideas
- Use Nextjs 13 with App router set up along with MUI
- Have a tab view with: 
    1. display each sector with percentage bar of time viewed
    2. pie chart of info using https://mui.com/x/react-charts/pie/#highlight
    3. list of all interactions unsorted

# Pseudo Code
## Percentage
const totalInteractions<int> = sum of total interactions

const allSectors<[string]> = save each unique sector and filter out repeated ones   // do this in case we add a new sector in the future

const sectorPercentage<[{}]> = return an array of objects with name of sector and number of interractions e.g.
```
{
    sector: 'energy',
    count: 5
    percentage: count/totalInteractions
},
...
``` 

### Style
- font: Rubik as in their main website
- style buttons/ table to their primary colours

        #66CCCC // button color
        #112A42 // text colour


### Improve
- add animations
- customise tab button interaction a bit more
- add more of Substantive Research style