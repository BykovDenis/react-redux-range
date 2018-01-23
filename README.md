<h1>React redux range</h1>

<p>A tooltip component for react.</p>

<h2>Screenshot</h2>
<h2>Live demo</h2>
<h2>API</h2>

<table>
  <tr>
    <th>name</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>min</td>
    <td>PropTypes.number</td>
    <td>0</td>
    <td>Range min value</td>
  </tr>
  <tr>
    <td>max</td>
    <td>PropTypes.number</td>
    <td>0</td>
    <td>Range max value</td>
  </tr>
  <tr>
    <td>value</td>
    <td>PropTypes.array</td>
    <td>[0, 100]</td>
    <td>Range interval values</td>
  </tr>
</table>

## Constants

<dl>
<dt><a href="#initWidthContainer">initWidthContainer</a></dt>
<dd><p>detect offset component relation vieport</p>
</dd>
<dt><a href="#SET_MIN_MARKER_NEW_POSITION">SET_MIN_MARKER_NEW_POSITION</a></dt>
<dd><p>[description]</p>
</dd>
<dt><a href="#initialState">initialState</a></dt>
<dd><p>[description]</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getIndexMinElemArray">getIndexMinElemArray(array)</a></dt>
<dd><p>Searching min element on an array</p>
</dd>
<dt><a href="#transparentToPercent">transparentToPercent(min, max, value)</a></dt>
<dd><p>helper processed DOM coords</p>
</dd>
</dl>

<a name="initWidthContainer"></a>

## initWidthContainer
detect offset component relation vieport

**Kind**: global constant  

| Param | Type |
| --- | --- |
| posX | <code>\*</code> | 

<a name="SET_MIN_MARKER_NEW_POSITION"></a>

## SET_MIN_MARKER_NEW_POSITION
[description]

**Kind**: global constant  
**Email**: [bykov_denis@icloud.com]  
**Create**: date 2018-01-18 01:09:58  
**Modify**: date 2018-01-19 02:35:27  
**Author**: [Bykov Denis]  
<a name="initialState"></a>

## initialState
[description]

**Kind**: global constant  
**Email**: [bykov_denis@icloud.com]  
**Create**: date 2018-01-18 12:28:20  
**Modify**: date 2018-01-18 04:47:14  
**Author**: [Bykov Denis]  
<a name="getIndexMinElemArray"></a>

## getIndexMinElemArray(array)
Searching min element on an array

**Kind**: global function  

| Param | Type |
| --- | --- |
| array | <code>\*</code> | 

<a name="transparentToPercent"></a>

## transparentToPercent(min, max, value)
helper processed DOM coords

**Kind**: global function  

| Param | Type |
| --- | --- |
| min | <code>\*</code> | 
| max | <code>\*</code> | 
| value | <code>\*</code> | 


