-- Problem1 
select min(WEIGHT) as WEIGHT from ITEMS;

--Problem2
select WNAME from WAREHOUSES where CITY_ID = (select ID from CITIES where CITY = 'pune');

--problem3
select * from ITEMS i
inner join ORDERS o on o.ITEMNO = i.ITEMNO
where o.CUSTOMER_CNO = (select CNO from CUSTOMER where CNAME = 'Mr. Patil');

--problem4 
with cte as(
select count(1),WAREHOUSES_ID from STORE_NAME group by WAREHOUSES_ID )
select WNAME from WAREHOUSES where wid = (select WAREHOUSES_ID from cte where count = (select max(count) from cte));

--problem5
with cte as(
select MIN(ITEMNO),ITEMNO from ORDERS group by ITEMNO)
select ITEM from IETMS where ITEMNO = (select ITEMNO from cte);

--problem 6 
select * from ORDERS
