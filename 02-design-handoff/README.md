# 디자인 → 개발 핸드오프 실습

디자인 및 개발 과정을 진행합니다.

Figma 디자인을 열어 Auto Layout을 사용해 디자인을 구현합니다.

구현한 UI 디자인을 개발 코드로 핸드오프합니다.

<img width="540" alt="image" src="https://private-user-images.githubusercontent.com/1850554/350393645-760800c8-e12e-47da-b961-1b4904929cd4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE2NDgwNTksIm5iZiI6MTcyMTY0Nzc1OSwicGF0aCI6Ii8xODUwNTU0LzM1MDM5MzY0NS03NjA4MDBjOC1lMTJlLTQ3ZGEtYjk2MS0xYjQ5MDQ5MjljZDQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDcyMiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA3MjJUMTEyOTE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ODg1ZThjMjlhOGRmOGJlOGU1OTAxYzdhNDRiNzhlNDZlZGY2MzhhNzIzMjE4NjAxOWE2Njc4ZDAzZDc4OTgyZSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.tBhObw9vN1NJGhS9iu_LYOIV_8ROy9ZegpmJOG5zEBI" style="max-width: 100%;">

## 수행 조건

테스트는 다음 조건을 충족해야 합니다.

- 모두가 접근 가능
- 의미있는 구조 설계
- 체계적인 표현 설계
- 원할한 상호작용 설계

## 구현 결과

![0723](https://github.com/user-attachments/assets/bff6f8ca-ad78-4f29-8387-ec9b0de44a9c)

## 마크업
```html
<ul class="list">
  <li class="list-item" tabindex="0">
    <img src="./src/assets/images/History.png" alt="History of Architecture" />
    <p>History of Architecture</p>
  </li>

  <li class="list-item" tabindex="0">
    <img src="./src/assets/images/Building-design.png" alt="Building design" />
    <p>Building design</p>
  </li>

  <li class="list-item" tabindex="0">
    <img src="./src/assets/images/Graphics.png" alt="Graphics" />
    <p>Graphics</p>
  </li>
  
  <li class="list-item" tabindex="0">
    <img src="./src/assets/images/Climatology.png" alt="Climatology" />
    <p>Climatology</p>
  </li>
</ul>
```

- 순서가 중요하지 않은 목록 `ul`과 list item을 뜻하는 `li`를 사용하여 마크업
- Tab 키로 이동 가능할 수 있도록 `tabindex="0"` 속성 추가
- 이미지 대체 텍스트 설정

## 스타일링

- flex를 사용하여 유연하게 배치
