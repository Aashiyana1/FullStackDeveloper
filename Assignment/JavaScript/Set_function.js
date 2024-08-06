let Y = "Set and It's Methods!!"
let dateSet = new Set();
            dateSet.add(new Date(2022, 0, 1));
            dateSet.add(new Date(2023, 5, 15));
            dateSet.add(new Date(2024, 10, 30));
            dateSet.add(new Date(2025, 3, 20));

            let formattedDates = [...dateSet].map(date => date.toDateString());
            let years = [...dateSet].map(date => date.getFullYear());
            document.getElementById("Heading2").innerHTML = Y;
            document.getElementById("setDates1").innerHTML = "Dates in the Set: " + formattedDates.join(", ");
            document.getElementById("setDates2").innerHTML = "Years in the Set: " + years.join(", ");
            document.getElementById("setDates3").innerHTML = "Size of the Set: " + dateSet.size;

            // Add a new date
            dateSet.add(new Date(2026, 8, 10));
            formattedDates = [...dateSet].map(date => date.toDateString());
            document.getElementById("setDates4").innerHTML = "Dates after adding a new date: " + formattedDates.join(", ");

